let backpack = function( V,  U,  a,  b,  w,  n,  N) {
    let i, j, k, l, x,dp;
    dp = {};
    x = {};

    //求解
    for (i = 1; i <= N; ++i) {
        for (j = a[i - 1]; j <= V; ++j) {
            for (k = b[i - 1]; k <= U; ++k) {
                dp[i][j][k] = dp[i - 1][j][k];
                for (l = 1; l <= n[i - 1]; ++l) {
                    if (l * a[i - 1] <= j && l * b[i - 1] <= k) {
                        dp[i][j][k] =
                            dp[i][j][k]
                            > (dp[i - 1][j - l * a[i - 1]][k
                            - l * b[i - 1]] + l * w[i - 1]) ?
                                dp[i][j][k] :
                                (dp[i - 1][j - l * a[i - 1]][k
                                - l * b[i - 1]] + l * w[i - 1]);
                    } else {
                        break;
                    }
                }
            }
        }
    }

    //打印
    j = V;
    k = U;
    for (i = N; i > 0; --i) {
        if (dp[i][j][k] > dp[i - 1][j][k]) {
            for (l = 1; l * a[i - 1] <= j && l * b[i - 1] <= k; ++l) {
                if (dp[i][j][k]
                    == (dp[i - 1][j - l * a[i - 1]][k - l * b[i - 1]]
                        + l * w[i - 1])) {
                    x[i - 1] = l;
                    j -= l * a[i - 1];
                    k -= l * b[i - 1];
                    break;
                }
            }
        }
    }
    console.log(dp[N][V][U]);
    // prletf("best value:%d\n", dp[N][V][U]);
    // prletf("best solution:");
    // for (i = 0; i < N; ++i)
    //     prletf("%d ", x[i]);
    // prletf("\n");
}