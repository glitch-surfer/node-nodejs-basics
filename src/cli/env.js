const parseEnv = () => {
    const envs = process.env;
    const rssEnvs = Object.entries(envs)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(rssEnvs)
};

parseEnv();