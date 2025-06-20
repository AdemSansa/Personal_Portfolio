
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2205, hash: '6e1f0a6db93ce2c60f6993913750485a114c75c42e5a29b808c5935df8aa0fd0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'd18fee2389d973e18bb683ef0f48bb2cf687c1c9e31e77fea41b19179ec0b4df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6278, hash: '33e640429e88916fc519265950e515869813312ae7c704828ab20253dd5527b3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6287, hash: '399940edb73bb1dc0736b4a8fe1df93239a3e882902fce57de1609b67b8095a4', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14568, hash: '3e91d117bc08287cba9db3e9e05f143a195ab31ef2607cc8d3ef8be6c9ffaf99', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6284, hash: 'a84b0aa8093189edba4220c407a81a4401beaf6b26e94fd9adeb1210ee718dc1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-RQYZEPNL.css': {size: 11352, hash: '90dWT8diwjw', text: () => import('./assets-chunks/styles-RQYZEPNL_css.mjs').then(m => m.default)}
  },
};
