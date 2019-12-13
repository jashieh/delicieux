import React from 'react';
import Target from '../stylesheets/assets/target.png';
import Scale from "../stylesheets/assets/weight-scale.png";
import Dumbbell from "../stylesheets/assets/dumbbell.png";
import Ruler from "../stylesheets/assets/ruler.png";
import Calorie from "../stylesheets/assets/calories-two.png";
import Age from "../stylesheets/assets/hourglass.png";
import Man from "../stylesheets/assets/man.png";
import Woman from "../stylesheets/assets/woman.png";
import Sex from "../stylesheets/assets/femenine.png";
 

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.user.age,
      gender: this.props.user.gender,
      height: this.props.user.height,
      weight: this.props.user.weight,
      activityLevel: this.props.user.activityLevel,
      weeklyTarget: this.props.user.weeklyTarget,
      edit: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
    this.updateGender = this.updateGender.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    document.addEventListener("keydown", this.hitEnter);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.hitEnter);
  }

  flip() {
    return !this.state.edit
  }

  toggleEdit() {
    this.setState({ edit: this.flip() }, () => {
      if(!this.state.edit) {
        this.handleSubmit();
      } else {
          this.setState({ 
            age: this.props.user.age,
            gender: this.props.user.gender,
            height: this.props.user.height, 
            weight: this.props.user.weight,
            activityLevel: this.props.user.activityLevel,
            weeklyTarget: this.props.user.weeklyTarget,
          });
      }
    });
  }

  update(field) {
    const min = 0;
    const max = 999;
    return e => {
      if(field === "age" || field === "height"|| field === "weight") {
        if (parseInt(e.target.value) > max) 
          e.target.value = max.toString();
        else if (parseInt(e.target.value) < min)
          e.target.value = min.toString();
      }

      if(field === "gender") {
        this.setState({ [field]: e.target.value }, () => this.updateGender());
      } else {
        this.setState({ [field]: e.target.value });
      }
    }
  }

  hitEnter(e) {
    if(e.key === "Enter" && this.state.edit) {
      this.toggleEdit();
    }
  }

  handleSubmit() {
    this.props.updateUser({ 
      id: this.props.userId, 
      age: this.state.age, 
      gender: this.state.gender,
      height: this.state.height,
      weight: this.state.weight, 
      activityLevel: this.state.activityLevel,
      weeklyTarget: this.state.weeklyTarget
    });
  }

  updateGender() {
    this.props.updateUser({ 
      id: this.props.userId, 
      gender: this.state.gender,
      age: this.props.user.age, 
      height: this.props.user.height,
      weight: this.props.user.weight, 
      activityLevel: this.props.user.activityLevel,
      weeklyTarget: this.props.user.weeklyTarget
    });
  }
  
  render() {

    let height = this.props.user.height;
    let weight = this.props.user.weight;
    let age = this.props.user.age;
    let edit = "Edit";
    let activityLevel; 
    let weeklyTarget;
    let user;
    let gender;
    
    switch(this.props.user.activityLevel) {
      case 1:
        activityLevel = "Sedentary";
        break;
      case 2:
        activityLevel = "Lightly Active";
        break;
      case 3:
        activityLevel = "Moderately Active";
        break;
      case 4:
        activityLevel = "Very Active";    
        break;
      default: 
        activityLevel = ""; 
        break;
    }

    switch(this.props.user.weeklyTarget) {
      case 0:
        weeklyTarget = "Maintain my weight";
        break;
      case -1.0:
        weeklyTarget = "Lose 1.0 kg/week";
        break;
      case -0.75:
        weeklyTarget = "Lose 0.75 kg/week";
        break;
      case -0.5:
        weeklyTarget = "Lose 0.5 kg/week";    
        break;
      case -0.25:
        weeklyTarget = "Lose 0.25 kg/week";
        break;
      case 0.25:
        weeklyTarget = "Gain 0.25 kg/week";
        break;
      case 0.5:
        weeklyTarget = "Gain 0.5 kg/week";
        break;
      case 0.75:
        weeklyTarget = "Gain 0.75 kg/week";    
        break;
      case 1.0:
        weeklyTarget = "Gain 1.0 kg/week";    
        break;
      default: 
        weeklyTarget = ""; 
        break;
    }

      gender = 
        <div className="gender-radio-container">
            <input type="radio" 
              className="gender-radio" 
              onChange={this.update("gender")}
              name="gender"
              value={"M"}
              id="genderM"
              checked={this.props.user.gender === "M"}/>
              <label htmlFor="genderM" className="gender-icon">
                <img className="gender-image" src={Man} alt=""/>
              </label>

            <input type="radio" 
              className="gender-radio" 
              onChange={this.update("gender")}
              name="gender"
              value={"F"}
              id="genderF"
              checked={this.props.user.gender === "F"}/>
              <label htmlFor="genderF" className="gender-icon">
                <img className="gender-image" src={Woman} alt=""/>
              </label>

        </div>;
        
    if(this.state.edit) {
      age = <input type="number" 
        className="user-info-input" 
        value={this.state.age}
        onChange={this.update("age")}
        />;

      height = <input type="number" 
        className="user-info-input" 
        value={this.state.height}
        onChange={this.update("height")}
        />;

      weight = <input type="number" 
        className="user-info-input" 
        value={this.state.weight}
        onChange={this.update("weight")}
        />;

      activityLevel = 
        <select className="activity" onChange={this.update("activityLevel")}>
          <option value="1" selected={this.props.user.activityLevel === 1}>
            Sedentary
          </option>
          <option value="2" selected={this.props.user.activityLevel === 2}>
            Lightly Active
          </option>
          <option value="3" selected={this.props.user.activityLevel === 3}>
            Moderately Active
          </option>
          <option value="4" selected={this.props.user.activityLevel === 4}>
            Very Active
          </option>
        </select>
      
      weeklyTarget = (
        <select className="activity" onChange={this.update("weeklyTarget")}>
          <option value="0" selected={this.props.user.weeklyTarget === 0}>
            Maintain my weight
          </option>
          <option value="-1.0" selected={this.props.user.weeklyTarget === -1.0}>
            Lose 1.0 kg/week
          </option>
          <option
            value="-0.75"
            selected={this.props.user.weeklyTarget === -0.75}
          >
            Lose 0.75 kg/week
          </option>
          <option value="-0.5" selected={this.props.user.weeklyTarget === -0.5}>
            Lose 0.5 kg/week
          </option>
          <option
            value="-0.25"
            selected={this.props.user.weeklyTarget === -0.25}
          >
            Lose 0.25 kg/week
          </option>
          <option value="0.25" selected={this.props.user.weeklyTarget === 0.25}>
            Gain 0.25 kg/week
          </option>
          <option value="0.5" selected={this.props.user.weeklyTarget === 0.5}>
            Gain 0.5 kg/week
          </option>
          <option value="0.75" selected={this.props.user.weeklyTarget === 0.75}>
            Gain 0.75 kg/week
          </option>
          <option value="1.0" selected={this.props.user.weeklyTarget === 1.0}>
            Gain 1.0 kg/week
          </option>
        </select>
      );

      edit = "Save";
    }

    if(this.props.user.name) {
      user =  this.props.user.name.toUpperCase();
    }

    return (
      <div className="profile-container">
        <div className="edit">
          <div className="edit-profile"onClick={this.toggleEdit}>{edit}</div>
        </div>
        <div className="profile-item-container">
          <div className="profile-user">
            <div>
              Name:
            </div>
            <div className="profile-name">
              {user}
            </div>
          </div>
        </div>
        <div className="profile-item-container">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Sex} alt="" />
            </div>
            <div>Sex</div>
          </div>
          <div>{gender}</div>
        </div>
        <div className="profile-item-container">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Age} alt="" />
            </div>
            <div>Age</div>
          </div>
          <div>{age}</div>
        </div>
        <div className="profile-item-container">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Ruler} alt="" />
            </div>
            <div>Height (cm)</div>
          </div>
          <div>{height}</div>
        </div>
        <div className="profile-item-container">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Dumbbell} alt="" />
            </div>
            <div>Activity Level</div>
          </div>
          <div>{activityLevel}</div>
        </div>
        <div className="profile-item-container">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Scale} alt="" />
            </div>
            <div>Current Weight (kg)</div>
          </div>
          <div>{weight}</div>
        </div>
        <div className="profile-item-container">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Target} alt="" />
            </div>
            <div>Weekly Target</div>
          </div>
          <div>{weeklyTarget}</div>
        </div>
        <div className="profile-item-container last">
          <div className="profile-left">
            <div className="profile-logo">
              <img src={Calorie} alt="" />
            </div>
            <div>
              Daily Calorie Goal:{" "}
              {Math.floor(this.props.calorieCalc(this.props.user))} cal
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default UserProfile;
  
  // User inhtmlFormation -- UpdateUser