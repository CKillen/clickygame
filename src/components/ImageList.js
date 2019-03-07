import React from 'react';

class ImageList extends React.Component {

  state = {
    imagelist: [
      {
        key: "1",
        clicked: false,
        url: "https://vignette.wikia.nocookie.net/villains/images/6/65/Meowth_Based_On.png/revision/latest?cb=20180724042440",
      },
      {
        key: "2",
        clicked: false,
        url: "http://1.bp.blogspot.com/-abBmZroOWLE/VI1OaUQRSVI/AAAAAAAAHag/BUaUVdHh1Ak/s1600/Pikachu_Vector.png",
      },
      {
        key: "3",
        clicked: false,
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png",
      },
      {
        key: "4",
        clicked: false,
        url: "https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png",
      },
      {
        key: "5",
        clicked: false,
        url: "https://4.bp.blogspot.com/-IUOZK_Uv2eM/WopUd-UUFwI/AAAAAAAAAMQ/gxl1T-EXQ70jAMq1gQy34fhLUlrqbEFjgCLcBGAs/s1600/lax.png",
      },
      {
        key: "6",
        clicked: false,
        url: "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
      },
      {
        key: "7",
        clicked: false,
        url: "https://cdn.bulbagarden.net/upload/5/5d/010Caterpie.png",
      },
      {
        key: "8",
        clicked: false,
        url: "https://fwis.co.uk/wp-content/uploads/2018/09/7-squirtle.png",
      },
      {
        key: "9",
        clicked: false,
        url: "http://dne.enaa.com/wp-content/uploads/2016/08/116-horsea.png",
      },
      {
        key: "10",
        clicked: false,
        url: "https://assets1.ignimgs.com/2019/03/01/7-suicune-1551478019331_1280w.png",
      },
      {
        key: "11",
        clicked: false,
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png",
      },
      {
        key: "12",
        clicked: false,
        url: "https://cdn.bulbagarden.net/upload/thumb/4/46/019Rattata.png/250px-019Rattata.png",
      },
    ]
  }

  imageClicked = (event) => {
    //if clicked === true end else ++
    const { id } = event.target;
    const clickedImage = this.state.imagelist.find(ele => ele.key === id)
    //if clickedImage is clicked restart game
    if (clickedImage.clicked) {
      //call prop fail to reset score
      this.props.onFail();
      this.setState(state => {
        const list = state.imagelist.map((item) => item.clicked = false);
        return list;
      });
      //shuffle images
    } else {
      //increment score up
      this.props.onSuccess();
    
      //Set clicked to true
      this.setState(state => {
        const list = state.imagelist.map((item, j) => {
          if(item.key === id) {
            return item.clicked = true;
          } else {
            return item;
          }
        });
  
        return list;
      });
    }
  }

  renderList() {
    //Shuffle the imagelist 
    //first make an object with a random number and the original image
    //sort by the random number 
    //map just the value of the image
    let shuffledImageList = this.state.imagelist.map((image) => ({sort: Math.random(), value: image})).sort((a, b) => a.sort - b.sort).map((image) => image.value)
    return (
      shuffledImageList.map(({ key, url }) => {
        return <img onClick={this.imageClicked} key={key} id={key} className="four wide column" src={url} alt="" />
      })
    )
  }

  render() {
    return (
      <div className="ui grid segment attached">{this.renderList()}</div>
    )
  }
}

export default ImageList;