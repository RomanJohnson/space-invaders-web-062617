class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.crew.forEach((member) =>{member.currentShip= this}
  )
    this.phasers = phasers
    this.phasersCharge = "uncharged"
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = (this.crew.length > 0 ? false:true)
}

}
