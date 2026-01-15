import{o as W}from"./chunk-AFLIMVHV.js";import{Ab as _,Bb as A,Bd as c,Da as u,Ed as F,Fb as j,Gb as N,Hb as S,I as f,J as m,L as y,N as r,Oa as a,Ob as x,Pa as b,Ra as E,Sa as v,Zd as B,_b as H,_d as G,a as P,ac as T,bc as p,ca as g,cc as O,ea as s,ee as d,fa as h,fe as k,ha as l,jb as M,kb as w,pe as V,rb as D,tb as I,ub as C}from"./chunk-MEM3PUSO.js";var U=class e{state=r(V);showSophisticatedWrappers=g(!1);pendingEntity=g(void 0);isReadOnlyMode=p(!1);shownEntities=H(()=>{let n=this.existingEntities(),t=this.pendingEntity();return t?[...n,t]:n});createNew(){this.addEditableEntityComponent()}macosCreateNew(){this.isReadOnlyMode()||this.addEditableEntityComponent()}listenSophisticatedWrappersShortcut(){this.toggleSophisticatedWrappers(!this.showSophisticatedWrappers())}toggleSophisticatedWrappers(n){this.showSophisticatedWrappers.set(n)}discardNew(){this.resetPendingEntity()}addEditableEntityComponent(){this.pendingEntity.set(Object.assign({},this.newEntryDefinition))}resetPendingEntity(){this.pendingEntity.set(void 0)}onSave(n){this.state.saveEntity(n,this.stateProperty),this.resetPendingEntity()}onDelete(n){this.state.deleteEntity(n,this.stateProperty)}overrideExistingEntries=p();overrideNewEntryDefinition=p();existingEntriesResetEffect=s(()=>{let n=this.overrideExistingEntries();n&&h(()=>{this.existingEntities=n})});newEntryDefinitionResetEffect=s(()=>{let n=this.overrideNewEntryDefinition();n&&(this.newEntryDefinition=n)});static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-generic-manager-page"]],hostBindings:function(t,i){t&1&&D("keydown.alt.n",function(){return i.createNew()},u)("keydown.f1",function(){return i.macosCreateNew()},u)("keydown.f2",function(){return i.listenSophisticatedWrappersShortcut()},u)("keydown.esc",function(){return i.discardNew()},u)},inputs:{isReadOnlyMode:[1,"isReadOnlyMode"],overrideExistingEntries:[1,"overrideExistingEntries"],overrideNewEntryDefinition:[1,"overrideNewEntryDefinition"]},decls:2,vars:0,template:function(t,i){t&1&&(M(0,"p"),S(1,"generic-manager-page works!"),w())},encapsulation:2})};var $=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var ee=["*"],te=`
    ${$}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,ne={root:({instance:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},q=(()=>{class e extends F{name="inputgroup";style=te;classes=ne;static \u0275fac=(()=>{let t;return function(o){return(t||(t=l(e)))(o||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var L=new y("INPUTGROUP_INSTANCE"),ie=(()=>{class e extends G{_componentStyle=r(q);$pcInputGroup=r(L,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let t;return function(o){return(t||(t=l(e)))(o||e)}})();static \u0275cmp=a({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(i,o){i&2&&N(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass"},features:[x([q,{provide:L,useExisting:e},{provide:B,useExisting:e}]),E([d]),v],ngContentSelectors:ee,decls:1,vars:0,template:function(i,o){i&1&&(I(),C(0))},dependencies:[k],encapsulation:2})}return e})(),Se=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=b({type:e});static \u0275inj=m({imports:[ie,c,c]})}return e})();var oe=["*"],re={root:"p-inputgroupaddon"},Q=(()=>{class e extends F{name="inputgroupaddon";classes=re;static \u0275fac=(()=>{let t;return function(o){return(t||(t=l(e)))(o||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})(),K=new y("INPUTGROUPADDON_INSTANCE"),pe=(()=>{class e extends G{_componentStyle=r(Q);$pcInputGroupAddon=r(K,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let t;return function(o){return(t||(t=l(e)))(o||e)}})();static \u0275cmp=a({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(i,o){i&2&&(j(o.hostStyle),N(o.cn(o.cx("root"),o.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[x([Q,{provide:K,useExisting:e},{provide:B,useExisting:e}]),E([d]),v],ngContentSelectors:oe,decls:1,vars:0,template:function(i,o){i&1&&(I(),C(0))},dependencies:[k],encapsulation:2})}return e})(),He=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=b({type:e});static \u0275inj=m({imports:[pe,c,c]})}return e})();var se=["firstInput"],z=class e{fb=r(W);isEditMode=g(!1);isReadOnlyMode=p(!1);showSophisticatedWrappers=p(!0);existingEntities=p([]);nextId=p.required();value=p.required();firstInput=O("firstInput");cancel=T();save=T();delete=T();setEditModeByValueEffect=s(()=>{let n=this.value();this.isEditMode.set(n.id===0)});cancelKeyTrigger(){this.onCancel()}editModeSwitchEffect=s(()=>{this.isEditMode()?this.form.enable():this.form.disable()});lastEntityId=null;valueSetEffect=s(()=>{let n=this.value(),t=h(()=>this.isEditMode());if(n!=null){let i=this.lastEntityId!==n.id;this.lastEntityId=n.id,(i||!t)&&this.resetForm()}});resetForm(){let n=P({},this.value());this.form.patchValue(this.getFormEntityValue(n))}onSave(){this.form.markAllAsTouched();let n=this.form.valid,t=this.value();if(n){let i=this.form.getRawValue(),o=this.nextId(),J=t.id!==0?t.id:o,X=P({},this.getUpdatedEntityValue(i,J));this.save.emit(X)}}onDelete(){let n=this.value();this.isEntityInUse()||this.delete.emit(n)}onEdit(){this.isEditMode.set(!0)}onCancel(){this.value().id===0&&this.cancel.emit(),this.isEditMode.set(!1),this.resetForm()}focusFirstInputEffect=s(()=>{let n=this.isEditMode(),t=this.firstInput();n&&t!=null&&(t.nativeElement.focus(),t.nativeElement.scrollIntoView({behavior:"smooth"}))});static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-generic-details-component"]],viewQuery:function(t,i){t&1&&_(i.firstInput,se,5),t&2&&A()},hostBindings:function(t,i){t&1&&D("keydown.esc",function(){return i.cancelKeyTrigger()},u)},inputs:{isReadOnlyMode:[1,"isReadOnlyMode"],showSophisticatedWrappers:[1,"showSophisticatedWrappers"],existingEntities:[1,"existingEntities"],nextId:[1,"nextId"],value:[1,"value"]},outputs:{cancel:"cancel",save:"save",delete:"delete"},decls:2,vars:0,template:function(t,i){t&1&&(M(0,"p"),S(1,"generic-details-component works!"),w())},encapsulation:2})};export{ie as a,Se as b,pe as c,He as d,z as e,U as f};
