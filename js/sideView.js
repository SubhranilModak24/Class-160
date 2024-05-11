AFRAME.registerComponent('place-side-view',{
    tick:function(){
        const placesContainer = document.querySelector('#places-container')
        const {state} = placesContainer.getAttribute('tour');
        if (state === 'view' || state === 'change-view'){
            this.el.setAttribute('visible',true);
        }
        else{
            this.el.setAttribute('visible',false)
        }
    },
    init:function(){
        this.createPlaces();
    },
    createPlaceThumbnail:function(position,id){
        const entityEL = document.createElement('a-entity')
        entityEL.setAttribute('visible',true);
        entityEL.setAttribute('id',`place-${id}`)
        entityEL.setAttribute('geometry',{
            primitive:'circle',
            radius:2.5
        })
        entityEL.setAttribute('material',{
            src:"./assets/helicopter.png",
            opacity:0.9
        })
        entityEL.setAttribute('position',position)
        entityEL.setAttribute('cursor-listener',{})
        return entityEL;
    },
    createPlaces:function(){
        const sideViewContainer = document.querySelector('#side-view-container')
        let prevoiusXPosition = -150;
        let prevoiusYPosition = 30;
        for (var i=1 ; i<=4 ;i++ ){
            const position = {
                x:(prevoiusXPosition+=50),
                y:(prevoiusYPosition+=2),
                z:-40
            }
            const entityEL = this.createPlaceThumbnail(position,i);
            sideViewContainer.appendChild(entityEL); 
        };
    }
})
