(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{hl1e:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var a=s("AytR"),o=s("fXoL"),n=s("tk/3");let i=(()=>{class t{constructor(t){this.httpClient=t}getToDo(){return this.httpClient.get(a.a.apiBaseURL+"/TODOTasks")}getToDoCompleate(){return this.httpClient.get(a.a.apiBaseURL+"/TODOTasks/TODOTasksCompleate")}getToDoUpcoming(){return this.httpClient.get(a.a.apiBaseURL+"/TODOTasks/TODOTasksUpcoming")}saveToDo(t){return this.httpClient.post(a.a.apiBaseURL+"/TODOTasks",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(n.b))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);