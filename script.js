const items = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: []
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: []
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
]

const row = document.getElementById("row")
let filters = []
let result = []
let newItems = []

const domCreation = (items) => {
  if (items.length) {
    row.innerHTML = ''
    items.forEach(item => {
      row.innerHTML += `
      <div class="card col-10 mx-auto mt-5 d-flex position-relative shadow" >
        <img src="${item.logo}" alt="">
        <div class="card-body pe-sm-1 pe-md-0 pt-4 main">
          <h5 class="card-title Company mt-2">${item.company}<span class="new ms-3 me-1 ${item.new ? '' : 'd-none'}">NEW!</span> <span class="featured ${item.featured ? '' : 'd-none'}">FEATURED</span></h5>
          <h6 class="card-title my-3 fw-bold">${item.position}</h6>
          <h6 class="text-gray d-flex align-items-center gap-2"><span class="ago">${item.postedAt}</span> . <span class="time">${item.contract}</span> . <span class="location">${item.location}</span></h6>
          <hr class="mb-0 mt-3">
        </div>
        <div class="card-body skills pt-0 d-flex gap-3 flex-wrap filters" id="${item.id}">
          <h6 class="p-2 rounded-1" onClick="onClicking(this)">${item.role}</h6>
          <h6 class="p-2 rounded-1" onClick="onClicking(this)">${item.level}</h6>
        </div>
      </div>
      `
    });

    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      const div = document.getElementById(element.id)
      for (let j = 0; j < element.languages.length; j++) {
        const lan = element.languages[j];
        const child = document.createElement("h6")
        child.className = 'p-2 rounded-1'
        child.innerHTML = lan
        child.setAttribute("onClick", "onClicking(this)")
        div.appendChild(child)
      }
    }

    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      const div = document.getElementById(element.id)
      for (let j = 0; j < element.tools.length; j++) {
        const lan = element.tools[j];
        const child = document.createElement("h6")
        child.className = 'p-2 rounded-1'
        child.innerHTML = lan
        child.setAttribute("onClick", "onClicking(this)")
        div.appendChild(child)
      }
    }
  }
}

function listener(filterArr) {
  if (filterArr.length) {
    // console.log("calling")
    // const result = items.filter(obj =>
    //   filterArr.every(arrItem => obj.languages.includes(arrItem)) ||
    //   filterArr.every(arrItem => obj.role === arrItem) ||
    //   filterArr.every(arrItem => obj.level === arrItem) ||
    //   filterArr.every(arrItem => obj.tools.includes(arrItem)))
    // domCreation(result)
    // console.log(result)

    if (result.length) {
      newItems = [...result]
    }
    else {
      newItems = [...items]
    }
    result = []
    newItems.forEach(obj => {
      for (let i = 0; i < filterArr.length; i++) {
        let filter = filterArr[i]
        if (obj.languages.includes(filter) ||
          obj.tools.includes(filter) ||
          obj.role === filter ||
          obj.level === filter) {
          if (!result.includes(obj)) {
            // console.log("Inserting...")
            result.push(obj)
            // console.log("if",i)
          }
        }
        else{
          if(result.includes(obj)){
            // console.log("else",i)
            result = result.filter(item => item !== obj)
          }
          break
        }

      }

    });

    // console.log(result)
    domCreation(result)
  }
  else {
    domCreation(items)
  }

}
listener(filters)


// const btns = document.querySelectorAll(".skills h6")
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click",()=>{
//     console.log("event listener working")
//     if(!filters.includes(btns[i].textContent)){
//       filters.push(btns[i].textContent)
//     }
//     console.log(filters)
//     listener(filters)
//   })
// }

function onClicking(ele) {
  if (!filters.includes(ele.textContent)) {
    filters.push(ele.textContent)
  }
  // console.log(filters)
  listener(filters)
  filterTab(filters)
}

function filterTab(filters){
  const filterTab = document.getElementById("filterTab")
  const parent = document.getElementById("parent")
  const clearBtn = document.getElementById("clearBtn")
  parent.innerHTML = ''
  for(let i=0;i<filters.length;i++){
    let child = `<h6 class="d-flex mb-0 justify-content-between align-items-center ">${filters[i]}<button class="ms-3 " onclick="handleRemove(this)" >&times;</button></h6>`
    parent.innerHTML += child
  }
  if(filters.length){
    clearBtn.className = 'btn ms-auto'
    parent.classList.add("p-3")
  }
  else{
    clearBtn.className = "d-none"
    parent.classList.remove("p-3")
  }
  // console.log(filterTab)
}

function clearAll(){
  filters = []
  result.length = 0
  filterTab(filters)
  listener(filters)
}

function handleRemove(ele){
  filters = filters.filter(filter => filter !== ele.parentNode.textContent.slice(0,-1))
  result.length = 0
  listener(filters)
  filterTab(filters)
}