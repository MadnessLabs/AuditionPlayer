exports.config = {
  namespace: 'auditionplayer',
  generateDistribution: true,
  bundles: [
    { components: ['audition-player'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
