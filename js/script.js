function toggleSideNav(id){
  toggleBlock('.SideNavShadow')
  allToggleSideNav('#'+id)
  myToggleClass(myQuerySelecter('.brandLogo'),'active')
}
function openSubDropDown(id){
  // var subDropDown=myQuerySelecter('#'+id)
  // myToggleClass(subDropDown,'active')
  allToggleSideNav('#'+id)
}
function myQuerySelecter(myQuery){
    return document.querySelector(myQuery)
}
function myToggleClass(element,myClass){
  if(element.classList.contains(myClass)){
    element.classList.remove(myClass)
  }
  else if(!element.classList.contains(myClass)){
    element.classList.add(myClass)
  }
}
function allToggleSideNav(id){
  var sideNav=myQuerySelecter(id)
if(!sideNav.classList.contains('sideNavAnimationIn')){
sideNav.classList.add('sideNavAnimationIn')
sideNav.classList.remove('sideNavAnimationOut')

}
else if(!sideNav.classList.contains('sideNavAnimationOut')){
  sideNav.classList.add('sideNavAnimationOut')
  sideNav.classList.remove('sideNavAnimationIn')
}
}
function toggleBlock(myQuery){
  var sideNavShadow=myQuerySelecter(myQuery)
  if(sideNavShadow.style.display!=='block'){
    sideNavShadow.style.display='block';
  }
  else if(sideNavShadow.style.display==='block'){
    sideNavShadow.style.display='none';
  }
}