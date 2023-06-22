export const Highlight = {
    id: 1,
    icons: 'medal',
    titles: 'Highlight Achievements',
    flag:1,
    data:[{
        id: 0,
        title: 'TOP 10 SAO KHUE',
        content: [
          'BAP GROUP',
          'VINASA VIET NAM',
          '2021'
        ]
      }, {
        id: 1,
        title: 'TOP 10 SAO KHUE',
        content: [
          'BAP GROUP',
          'VINASA VIET NAM',
          '2021'
        ]
      }],

    }

export const Experiences = {
  id: 2,
  titles: 'Experiences',
  flag:1,
  icons: 'book',
  data:[{
      id: 0,
      title: 'BAP GROUP',
      content: [
        'Founder & CEO',
        'IT industry',
        '2021-Present'
      ]
    }, {
      id: 1,
      title: 'BAP VENTURES Co.., Ltd',
      content: [
        'Founder & CEO',
        'ERP system',
        '2020 - Present'
      ]
    }],
  }

export const Education = {
  id: 3,
  titles: 'Education',
  flag:0,
  icons:'book-education-outline',
  data:[{
    id: 0,
    title: 'TOKYO UNIVERSITY',
    content: [
      'Computing Science - Master',
      '2003-2010'
    ]
  }, {
    id: 1,
    title: 'TOKYO UNIVERSITY',
    content: [
      'Founder & CEO',
      'Computing Science - Bachelor',
      '2003 - 2008'
    ]
  }],
}

export const Licensec = {
  id: 4,
  icons:'certificate',
  flag:0,
  titles: 'Licensec & Certifications',
  data:[{
    id: 0,
    title: 'NORDIC CODER',
    content: [
      'Data Science',
      'May 2010 - August 2010'
    ]
  }, {
    id: 1,
    title: 'COLE.JP',
    content: [
      'Pproduct Managemnent',
      'June 2009 - December 2009'
    ]
  }],
}


export const Total = [Highlight, Experiences, Education, Licensec,]



export const Interests = {
  id: 1,
  titles: 'Interests',
  icons:'cards-heart',
  flag:0,
  data:[{
    id: 0,
    content: [
      'Blockchain',
      'Meteverse',
      'Techproducts',
      'Game',
      'Speaker',
      'Generative AI'
    ]
  }],
}

export const Purposes = {
  id: 2,
  titles: 'Purposes',
  icons:'target',
  flag:0,
  data:[{
    id: 0,
    content: [
      'Find a business partner',
      'Find a Co-Founder',
      'Find a business partner',
      'Find a Co-Founder',
    ]
  }],
}

export const Skill = {
  id: 3,
  titles: 'Skill & Competency',
  flag:0,
  icons:'teddy-bear',
  data:[{
    id: 0,
    content: [
      'Management 2/10',
      'Decision making 2/10',
      'NodeJS 2/10',
      'React Native 2/10',
      'Java 2/10'
    ]
  }],
}

export const Totals = [ Interests, Purposes, Skill,];

export const Languages = {
  id: 1,
  titles: 'Languages',
  flag:0,
  icons:'earth',

    data:[{
    id: 0,
    icon:'language',
    title: 'Japaner',
    content: [
      'Proficient',
    ]
  }, {
    id: 1,
    icon:'language',
    title: 'Vietnamese',
    content: [
      'Mother tongue'
    ]
  }],
}

export const Traits = {
  id: 2,
  titles: 'Traits',
  icons:'face-recognition',
  flag:1,
  
  data: [{
    id: 0,
    icon:'touch-app',
    title: 'INFJ',
    content: [
      'Avocate Personality'
    ]
  }]
}
export const Totalb =[Languages, Traits]