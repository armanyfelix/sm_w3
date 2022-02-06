module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module['noParse'] = /gun\.js$/
    // config.node['fs'] = 'empty';
    return config
  },
}
