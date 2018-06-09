module.exports = [
  {
    endpoint: '/',
    type: 'all',
    controller: 'root_controller',
    action: 'welcome'
  },
  {
    endpoint: '/astromons',
    type: 'get',
    controller: 'astromon_controller',
    action: 'get_astromons'
  },
  {
    endpoint: '/astromons/:astromon_id/:element',
    type: 'get',
    controller: 'astromon_controller',
    action: 'get_astromon'
  }
]
