from aip import AipFace as af
from copy import deepcopy
import random
import csv
import os
import re

def FindMaxShape(face_shapes):
    shape = max(face_shapes, key=lambda x: x['probability'])
    return shape

def FindPerson(info, req):
    info = deepcopy(info)
    result = info['result']
    if not result:
        return False
    baby = result.pop(result.index(min(result, key=lambda x: x['age'])))
    if req == 'baby':
        return baby
    women = [x for x in result if x['gender'] == 'female']
    if req == 'mother':
        if women:
            mother = result.pop(result.index(min(women, key=lambda x: x['age'])))
            return mother
        else:
            return result[0]
    men = [x for x in result if x['gender'] == 'male']
    if req == 'father':
        if men:
            father = result.pop(result.index(min(men, key=lambda x: x['age'])))
            return father
        else:
            return result[0]

def seed_random(seed,where):
    random.seed(seed)
    return random.randrange(where[0],where[1])

def random_choose(ori_list, num, seed = 1):
    new_list = []
    ori_list = deepcopy(ori_list)
    i = 0
    while i < num:
        length = len(ori_list)
        index = seed_random(seed, [0, length-1])
        new_list.append(ori_list.pop(index))
        i+=1
    return new_list

def meta_test(imagepath, person_req, age = 20, gender = 'male', compare = 'none'):
    options = {}
    face_fields = set()
    result = {}
    character = []
    APP_ID = '10848675'
    API_KEY = '5FM7SOoluIaa6dAjSHnAtVlc'
    SECRET_KEY = '77qujtyZ3gag5XjVAnKmrlsDyd8DSd6h'
    client = af(APP_ID, API_KEY, SECRET_KEY)
    with open(imagepath,'rb') as imagefile:
        image = imagefile.read()
    
    max_face_num = 2
    face_fields.clear()
    face_fields.add("age")
    face_fields.add("beauty")
    face_fields.add("expression")
    face_fields.add("faceshape")
    face_fields.add("gender")
    #print(face_fields)
    options["max_face_num"] = max_face_num
    options["face_fields"] = str(face_fields)[1:-1].replace("'", '').replace(" ", "")

    info = client.detect(image,options)

    person = FindPerson(info, person_req)
    #print(person)
    beauty = person['beauty']

    face_shape = FindMaxShape(person['faceshape'])['type']
    face_shape_data = {
        'round': ['乐观', '博爱'],
        'triangle': ['博闻强记', '潜力股'],
        'square': ['稳健', '威严', '细致'],
        'oval': ['严谨', '服众'],
        'heart': ['活跃', '亲和']
    }

    laugh_level = info['result'][0]['expression']
    laugh_data = {
        '0':['稳健', '文静', '理智'],
        '1':['亲和', '温柔', '知性'],
        '2':['乐观', '天真', '大方']
    }

    predict_age = info['result'][0]['age']
    if age == 1:
        if laugh_level == 0:
            age_type = 'older'
        elif laugh_level == 2:
            age_type = 'younger'
        else:
            age_type = 'same'
    else:
        if age > predict_age:
            age_type = 'older'
        elif age < predict_age:
            age_type = 'younger'
        else:
            age_type = 'same'
        
    age_data = {
        'older': '你像颗种子，勇敢地冲破泥沙，将嫩绿的幼芽伸出地面，指向天空。',
        'younger': '成长的过程就是破茧为蝶，挣扎着褪掉所有的青涩，在阳光下抖动轻盈美丽的翅膀，闪闪的，微微的，幸福的颤抖',
        'same': '你是泊于青春的港口的一叶小舟，扬起信念的帆，载着希望的梦，驶向辽阔的海洋。'
    }
    result['future'] = age_data[str(age_type)]

    predict_gender = person['gender']

    gender_rate = person['gender_probability']
    if gender_rate <= 0.7:
        gender_kind = 'middle'
    elif gender == predict_gender:
        gender_kind = gender
    else:
        gender_kind = predict_gender + 'like'
    gender_data = {
        'male': 'pass',
        'female': 'pass',
        'malelike': 'pass',
        'femalelike': 'pass',
        'middle': 'pass'
    }
    result['gender'] = gender_data[gender_kind]

    character.clear()
    character.extend(laugh_data[str(laugh_level)])
    character.extend(face_shape_data[str(face_shape)])
    buf = deepcopy(character)
    character = list(set(character))
    character.sort(key=buf.index)
    character = random_choose(character, 3, seed = beauty)
    result['character'] = character
    try:
        special_file = open('special','r',encoding='utf-8')
    except:
        raise('文件已损坏:"special"')
    else:
        special_data = dict(csv.reader(special_file))
    finally:
        if special_file:
            special_file.close()
    special_number = seed_random(beauty+1,[1,16])
    result['special'] = special_data[str(special_number)]
    if compare != 'none':
        result = []

    return result

result = meta_test("../sources/a8.jpg", 'baby', age = 20, gender = 'male')
print(result)
