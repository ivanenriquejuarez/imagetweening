"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1274],{65108:function(t,e,s){s.d(e,{_:function(){return i}});let i=console},29169:function(t,e,s){s.d(e,{R:function(){return u},m:function(){return o}});var i=s(65108),r=s(99439),a=s(98435),n=s(58269);class o extends a.F{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||i._,this.observers=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,s,i,r,a,o,u,l,h,c,d,p,v,f,b,m,y,g,O;let R="loading"===this.state.status;try{if(!R){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(h=this.mutationCache.config).onMutate)?void 0:l.call(h,this.state.variables,this));let t=await (null==(c=(d=this.options).onMutate)?void 0:c.call(d,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let p=await (()=>{var t;return this.retryer=(0,n.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,p,this.state.variables,this.state.context,this)),await (null==(s=(i=this.options).onSuccess)?void 0:s.call(i,p,this.state.variables,this.state.context)),await (null==(r=(a=this.mutationCache.config).onSettled)?void 0:r.call(a,p,null,this.state.variables,this.state.context,this)),await (null==(o=(u=this.options).onSettled)?void 0:o.call(u,p,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:p}),p}catch(t){try{throw await (null==(p=(v=this.mutationCache.config).onError)?void 0:p.call(v,t,this.state.variables,this.state.context,this)),await (null==(f=(b=this.options).onError)?void 0:f.call(b,t,this.state.variables,this.state.context)),await (null==(m=(y=this.mutationCache.config).onSettled)?void 0:m.call(y,void 0,t,this.state.variables,this.state.context,this)),await (null==(g=(O=this.options).onSettled)?void 0:g.call(O,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,n.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},98435:function(t,e,s){s.d(e,{F:function(){return r}});var i=s(74822);class r{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:i.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},56646:function(t,e,s){s.r(e),s.d(e,{useMutation:function(){return d}});var i=s(7653),r=s(10210),a=s(74822),n=s(29169),o=s(99439),u=s(92032);class l extends u.l{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let s=this.options;this.options=this.client.defaultMutationOptions(t),(0,a.VS)(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,n.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){o.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,s,i,r,a,n,o,u;t.onSuccess?(null==(e=(s=this.mutateOptions).onSuccess)||e.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(i=(r=this.mutateOptions).onSettled)||i.call(r,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(a=(n=this.mutateOptions).onError)||a.call(n,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(o=(u=this.mutateOptions).onSettled)||o.call(u,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}}var h=s(84983),c=s(48141);function d(t,e,s){let n=(0,a.lV)(t,e,s),u=(0,h.useQueryClient)({context:n.context}),[d]=i.useState(()=>new l(u,n));i.useEffect(()=>{d.setOptions(n)},[d,n]);let v=(0,r.$)(i.useCallback(t=>d.subscribe(o.V.batchCalls(t)),[d]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),f=i.useCallback((t,e)=>{d.mutate(t,e).catch(p)},[d]);if(v.error&&(0,c.L)(d.options.useErrorBoundary,[v.error]))throw v.error;return{...v,mutate:f,mutateAsync:v.mutate}}function p(){}},44541:function(t,e,s){s.r(e),s.d(e,{useQueries:function(){return f}});var i=s(7653),r=s(10210),a=s(74822),n=s(99439),o=s(42961),u=s(92032);class l extends u.l{constructor(t,e){super(),this.client=t,this.queries=[],this.result=[],this.observers=[],this.observersMap={},e&&this.setQueries(e)}onSubscribe(){1===this.listeners.size&&this.observers.forEach(t=>{t.subscribe(e=>{this.onUpdate(t,e)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.observers.forEach(t=>{t.destroy()})}setQueries(t,e){this.queries=t,n.V.batch(()=>{let t=this.observers,s=this.findMatchingObservers(this.queries);s.forEach(t=>t.observer.setOptions(t.defaultedQueryOptions,e));let i=s.map(t=>t.observer),r=Object.fromEntries(i.map(t=>[t.options.queryHash,t])),n=i.map(t=>t.getCurrentResult()),o=i.some((e,s)=>e!==t[s]);(t.length!==i.length||o)&&(this.observers=i,this.observersMap=r,this.result=n,this.hasListeners()&&((0,a.e5)(t,i).forEach(t=>{t.destroy()}),(0,a.e5)(i,t).forEach(t=>{t.subscribe(e=>{this.onUpdate(t,e)})}),this.notify()))})}getCurrentResult(){return this.result}getQueries(){return this.observers.map(t=>t.getCurrentQuery())}getObservers(){return this.observers}getOptimisticResult(t){return this.findMatchingObservers(t).map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions))}findMatchingObservers(t){let e=this.observers,s=new Map(e.map(t=>[t.options.queryHash,t])),i=t.map(t=>this.client.defaultQueryOptions(t)),r=i.flatMap(t=>{let e=s.get(t.queryHash);return null!=e?[{defaultedQueryOptions:t,observer:e}]:[]}),a=new Set(r.map(t=>t.defaultedQueryOptions.queryHash)),n=i.filter(t=>!a.has(t.queryHash)),u=new Set(r.map(t=>t.observer)),l=e.filter(t=>!u.has(t)),h=t=>{let e=this.client.defaultQueryOptions(t),s=this.observersMap[e.queryHash];return null!=s?s:new o.z(this.client,e)},c=n.map((t,e)=>{if(t.keepPreviousData){let s=l[e];if(void 0!==s)return{defaultedQueryOptions:t,observer:s}}return{defaultedQueryOptions:t,observer:h(t)}});return r.concat(c).sort((t,e)=>i.indexOf(t.defaultedQueryOptions)-i.indexOf(e.defaultedQueryOptions))}onUpdate(t,e){let s=this.observers.indexOf(t);-1!==s&&(this.result=(0,a.Rc)(this.result,s,e),this.notify())}notify(){n.V.batch(()=>{this.listeners.forEach(({listener:t})=>{t(this.result)})})}}var h=s(84983),c=s(93266),d=s(74127),p=s(77345),v=s(64875);function f(t){let{queries:e,context:s}=t,a=(0,h.useQueryClient)({context:s}),o=(0,c.useIsRestoring)(),u=(0,d.useQueryErrorResetBoundary)(),f=i.useMemo(()=>e.map(t=>{let e=a.defaultQueryOptions(t);return e._optimisticResults=o?"isRestoring":"optimistic",e}),[e,a,o]);f.forEach(t=>{(0,v.Fb)(t),(0,p.pf)(t,u)}),(0,p.JN)(u);let[b]=i.useState(()=>new l(a,f)),m=b.getOptimisticResult(f);(0,r.$)(i.useCallback(t=>o?()=>void 0:b.subscribe(n.V.batchCalls(t)),[b,o]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),i.useEffect(()=>{b.setQueries(f,{listeners:!1})},[f,b]);let y=m.some((t,e)=>(0,v.SB)(f[e],t,o))?m.flatMap((t,e)=>{let s=f[e],i=b.getObservers()[e];if(s&&i){if((0,v.SB)(s,t,o))return(0,v.j8)(s,i,u);(0,v.Z$)(t,o)&&(0,v.j8)(s,i,u)}return[]}):[];if(y.length>0)throw Promise.all(y);let g=b.getQueries(),O=m.find((t,e)=>{var s,i;return(0,p.KJ)({result:t,errorResetBoundary:u,useErrorBoundary:null!=(s=null==(i=f[e])?void 0:i.useErrorBoundary)&&s,query:g[e]})});if(null!=O&&O.error)throw O.error;return m}}}]);