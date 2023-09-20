import http from './requ'

export const banapi=(params:any)=>http.get('/banner/list',{params})

export const listapi=(params:any)=>http.get('/shop/goods/list',{params})

export const deltapi=(params:any)=>http.get('/shop/goods/detail',{params})
