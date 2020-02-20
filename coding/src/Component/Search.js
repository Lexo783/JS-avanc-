import React from 'react';
import DarkSoul3 from "../pictures/dark_souls_3.jpg";
import Dbz from "../pictures/dbz_kakarot.jpg";
import MonsterHunter from "../pictures/MH_world.jpg";
import PokemonEpee from "../pictures/pokemon_epee.jpg";
import ResidentEvil from "../pictures/resident_evil_3.jpg";
import Skyrim from "../pictures/skyrim.jpg";
import Witcher3 from "../pictures/witcher 3.jpg";
import ZeldaBOTW from "../pictures/zelda_BOTW.jpg";
import Hearth from "../pictures/hearth.png";
import EmptyHearth from "../pictures/hearth_empty.png";

import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {addFavorite, delFavorite} from "../redux/actions";


export class Search extends React.Component {
  constructor(props) {
    super(props);

      let tableGames = [
          {
              name: "Darksouls 3", cover: DarkSoul3,
              description: "Développé par From Software, Dark Souls 3 est un action RPG particulièrement exigeant. " +
                  "L'environnement, très peu accueillant, ravira les amateurs de challenges corsés. " +
                  "Vous y combattrez de gigantesques ennemis, qui ne feront qu'une bouchée de vous.",
              genre: "Action | Action RPG | Dungeon RPG", date: "12 avril 2016"
          },
          {
              name: "Dragon Ball Z Kakarot", cover: Dbz,
              description: "Dragon Ball Z Kakarot permet de revivre l'histoire de Dragon Ball Z dans le peau de Kakarot / Goku. " +
                  "Développé par CyberConnect2, le jeu reproduira les moments emblématiques de l'oeuvre originale. " +
                  "Il sera possible de voler dans un monde vaste que vous débloquerez en progressant dans l'aventure, " +
                  "de croiser des ennemis, d'accepter des quêtes, mais aussi de pêcher et de voler.",
              genre: "Action RPG", date: "17 janvier 2020"
          },
          {
              name: "Monster Hunter World", cover: MonsterHunter,
              description: "La dernière entrée de la série Monster Hunter. " +
                  "Plus complet que jamais, le jeu transporte le joueur au travers de batailles contre " +
                  "de terribles monstres et de magnifiques paysages. Récupérerez des objets sur vos ennemis, " +
                  "créez de nouveaux équipements et armures, explorez tous les territoires disponibles. " +
                  "Saurez vous devenir le chasseur ultime ?",
              genre: "Action | RPG | Action RPG", date: "26 janvier 2018"
          },
          {
              name: "Pokemon épée",  cover: PokemonEpee,
              description: "Pokémon Épée / Bouclier est le nouvel épisode de la série Pokémon, exclusif " +
                  "à la console de salon de Nintendo. Le jeu prend place dans la nouvelle région de Galar " +
                  "et donne accès à trois nouveaux Pokémons de départ : Ouistempo (plante), Flambino (feu) et Larméléon (eau).",
              genre: "RPG", date: "15 novembre 2019"
          },
          {
              name: "Resident Evil 3", cover: ResidentEvil,
              description: "Resident Evil 3 (2020) est un jeu développé et édité par Capcom. " +
                  "C'est une version remise au goût du jour de Resident Evil 3, " +
                  "sorti initialement sur Playstation en 1999. Le joueur incarne Jill, " +
                  "une femme devant quitter Racoon City et les infectés qui habitent la ville.",
              genre: "Survival-Horror", date: "03 avril 2020"
          },
          {
              name: "The Elder Scrolls V : Skyrim",  cover: Skyrim,
              description: "The Elder Scrolls V : Skyrim est le cinquième épisode de la saga de jeux de rôle du même nom. " +
                  "Le scénario se passe 200 ans après l'histoire du quatrième opus, " +
                  "quand Alduin fait son retour au milieu d'une guerre civile. " +
                  "Seul le Dovahkiin, incarné par le joueur, peut mettre un terme à cette sombre affaire... " +
                  "Un monde gigantesque empli de quêtes est à explorer et auquel se sont rajoutées " +
                  "des extensions débloquant plus de quêtes.",
              genre: "Heroic Fantasy | Dragons", date: "11 novembre 2011"
          },
          {
              name: "The Witcher 3 : Wild Hunt",  cover: Witcher3,
              description: "The Witcher 3 : Wild Hunt est un Action-RPG se déroulant dans un monde ouvert. " +
                  "Troisième épisode de la série du même nom, inspirée des livres du polonais Andrzej Sapkowski, " +
                  "cet opus relate la fin de l'histoire de Geralt de Riv.",
              genre: "Fantastique | Heroic Fantasy", date: "19 mai 2015"
          },
          {
              name: "The Legend Of Zelda : Breath Of The Wild",  cover: ZeldaBOTW,
              description: "The Legend of Zelda : Breath of the Wild est un jeu d'action/aventure. " +
                  "Link se réveille d'un sommeil de 100 ans dans un royaume d'Hyrule dévasté. " +
                  "Il lui faudra percer les mystères du passé et vaincre Ganon, le fléau. " +
                  "L'aventure prend place dans un gigantesque monde ouvert et " +
                  "accorde ainsi une part importante à l'exploration. " +
                  "Le titre a été pensé pour que le joueur puisse aller où il veut dès le début, " +
                  "s'éloignant de la linéarité habituelle de la série.",
              genre: "Action | Aventure | RPG", date: "03 mars 2017"
          },
      ];
      let tableName = [];
      for (let i=0; i<tableGames.length; i++){
          tableName.push(tableGames[i].name);
      }

    this.state = {
          table : tableGames,
        list: tableName,
        props :this.props
    };

    this.removeItem = this.removeItem.bind(this);
  }



  removeItem(item) {
    // Put our list into an array
    const list = this.state.table.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item.name) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      table: list
    });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
                        <List items={this.state.table} delete={this.removeItem} />
          </section>
        </div>
      </div>
    );
  }
}










class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            favoritesGame : []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }

    handleChange(e) {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.items;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.name.toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.items;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }


    addToFavorite(gameName){
        console.log(gameName);
        this.props.addFavorite(gameName);
    }

    delToFavorite(gameName){
        this.props.delFavorite(gameName);
    }



    render() {
        const { favoritesGame } = this.props;
        console.log(favoritesGame)
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />

                        {this.state.filtered.map((game, i) =>
                            {
                                if (game.name!=="") {
                                    return (

                                        <div key={i} className="gameDiv">
                                            <img src={game.cover} className="gameImg"/>
                                            <div className="description">
                                                <div className="gameTitle">
                                                    <p>
                                                        {game.name}
                                                    </p>
                                                    <img src={Hearth} id={i} className="pictureFavorite"
                                                         onClick={() => this.addToFavorite(game.name.toString())}/>
                                                </div>
                                                <p>{game.description}</p>
                                                <p>
                                                    genre : {game.genre}
                                                </p>
                                                <p>
                                                    date de sortie : {game.date}
                                                </p>
                                            </div>
                                        </div>

                                    )

                                }
                                else {
                                    return (

                                        <div key={i} className="gameDiv">
                                            <img src={game.cover} className="gameImg"/>
                                            <div className="description">
                                                <div className="gameTitle">
                                                    <p>
                                                        {game.name}
                                                    </p>
                                                    <img src={EmptyHearth} id={i} className="pictureFavorite"
                                                         onClick={() => this.addToFavorite(game.name.toString())}/>
                                                </div>
                                                <p>{game.description}</p>
                                                <p>
                                                    genre : {game.genre}
                                                </p>
                                                <p>
                                                    date de sortie : {game.date}
                                                </p>
                                            </div>
                                        </div>

                                    )
                                }
                            }

                        )}

            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        favoritesGame : state.favoritesGame
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: gameName => {
            dispatch(addFavorite(gameName))
        },
        delFavorite : gameName=>{
            dispatch(delFavorite(gameName))
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Search));
