import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const members = [...senators, ...representatives] // modern way to combine arrays like a genioeuus!

const senatorDiv = document.querySelector('.senators')

function SimplifiedMembers(chamberFilter) {
  const filteredArray = members.filter((member) =>
    chamberFilter ? member.short_title === chamberFilter : member,
  )

  return filteredArray.map((senator) => {
    let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` ` 
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      gender: senator.gender,
      short_title: senator.short_title,
      seniority: +senator.seniority,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
    }
  })
}

function populateSenatorDiv(simpleSenators) {
  simpleSenators.forEach((senator) => {
    const senFigure = document.createElement('figure')
    const figImg = document.createElement('img')
    const figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL
    figCaption.textContent = `${senator.short_title}${senator.name}${senator.party}` 

    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorDiv.appendChild(senFigure)
  })
}

populateSenatorDiv(SimplifiedMembers())