import React,{Component} from 'react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

var oldIndex,newIndex;

export default class Dnd extends Component{
    state = {
        list: [
          {id: 0, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"},
          {id: 1, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Weaved_truncated_square_tiling.png"},
          {id: 2, imgUrl: "http://5.imimg.com/data5/FC/KN/MY-537032/square-hole-perforated-sheet-250x250.jpg"},
          {id: 3, imgUrl: "https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8.jpg"},
          {id: 4, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Sierpinski_square.jpg"},
          {id: 5, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Square-white.svg/2000px-Square-white.svg.png"},
          {id: 6, imgUrl: "https://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/6c/31/82/6c3182cd-f718-d550-181f-051f4148a2e4/mzl.qmwzcqcf.png/1200x630bb.jpg"},
          {id: 7, imgUrl: "http://www.pricolproperty.com/wp-content/uploads/2015/10/Caledon-Square-Dusky-view5626086ccd4d9-1024x905.jpg"},
          {id: 8, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDVW5GsNRdqdEI7liVuh9JLsyKOMgBKZwRcd96A5S_6iFIBc8Tw"},
          {id: 9, imgUrl: "http://www.bhaktigroup.in/upload/image/project/18/safal_square.jpg"},
          {id: 10, imgUrl: "https://www.makemytrip.com/travel-guide/media/dg_image/singapore/Parkview-Square-Singapore.jpg"},
          {id: 11, imgUrl: "http://jmdgroup.in/wp-content/uploads/2016/07/IMG_20160822_180726-515x400.jpg"},
          {id: 12, imgUrl: "http://e4336fa0c208189c0eee-e6761b7f2db36d2d2df00f6c169a70d2.r66.cf1.rackcdn.com/lps/assets/u/who1299ex-178939-W-Union-Square---Exterior.jpg"},
          {id: 13, imgUrl: "https://static.wixstatic.com/media/871b06_91f267016e8b4422b10fa7aedf205529.jpg"},
          {id: 14, imgUrl: "https://i.pinimg.com/originals/75/be/a9/75bea96bc04e2493167be9810ef3bc8c.jpg"},
        ]
      }

      dragStart = (e) =>{
        oldIndex = parseFloat(e.currentTarget.classList[1]);
        // copy, copyLink, copyMove, link, linkMove, move, all, and uninitialized
        // e.dataTransfer.effectAllowed='all';
      //  let img = e.target;
      //  img.style.border='5px solid black'
      // img.style.opacity='1';
      // img.style.visibility='visible'
  //  let crt = e.target.cloneNode(true);
  //     crt.style.position = "absolute"; 
        // e.dataTransfer.setDragImage(crt, 0, 0);
      }
      drop = (e) => {
          newIndex = parseFloat(e.currentTarget.firstChild.classList[1])
          var o,n
          this.state.list.forEach((v,i,arr)=>{if(v.id==oldIndex){o = i}});
          this.state.list.forEach((v,i,arr)=>{if(v.id==newIndex){n = i}});
          this.setState(prevState =>({list : arrayMove(prevState.list,o,n) }))
          e.currentTarget.style.opacity = '1'
      }

      

      render(){
          return(
          this.state.list.map((v)=>(
              <div
              key={v.id}
          onDragOver = {(e)=>{e.preventDefault()
                e.currentTarget.style.opacity='0'
                newIndex = parseFloat(e.currentTarget.firstChild.classList[1])
                var o,n
                  this.state.list.forEach((v,i,arr)=>{if(v.id==oldIndex){o = i}});
                  this.state.list.forEach((v,i,arr)=>{if(v.id==newIndex){n = i}});
                  this.setState(prevState =>({list : arrayMove(prevState.list,o,n) }))
          }}
            onDragEnter = { (e) =>{
                e.currentTarget.style.opacity= '0'
            }}
            onDragLeave = {(e) => {
                e.currentTarget.style.opacity = '1'
            }}
              onDrop= {this.drop}
              style={{
                  width:'350px',
                  height:'200px',
                  display:'inline-block',
                  margin:'10px'
              }}
              className='dropZone'
              >
                    <img style={{position:'relative'}}  draggable onDragStart={this.dragStart} className={`dragElement ${v.id}`} style={{width:'100%',height:'100%'}} key={v.id} src={v.imgUrl} ></img>

              </div>
          ))
          )
      }
}