let teacherName = 'Omar'

let teacher1Country = 'Bahrain'

let teacher1PhoneNumber = 66607845

const teacher1 = {
    name: "Omar",
    country: "Bahrain",
    phoneNumber: 66607845
}

// accessing a value in my object

console.log(teacher1.name)


const music = {
    currentTrack: "Just Ken",
    volume:70,
    currentPlayList: ['Just Ken', 'Hey Blondie', 'What I Was Made For', 'Dance The Night'],
    // new way to add function(method) to an object
    mute(){
        music.volume = 0
    },
    // old way to add function(method) to an object
    // mute: function(){
    //     music.volume  = 0
    // },
    trackIdx: 0,
    next(){
        if(music.currentPlayList[this.trackIdx +1]){
        music.trackIdx += 1
        music.currentTrack = music.currentPlayList[this.trackIdx]
    }
    else{
        music.trackIdx = 0
        music.currentTrack = music.currentPlayList[this.trackIdx]
    }
},
}

console.log(music)
console.log(music.volume)

// add new key:value pair
music.rating = 5
console.log(music)

// update a key:value pair
music.volume = 20
console.log(music)

// delete a key:value pair
delete music.rating
console.log(music)

music.myPlaylist = ['Midnight Blues', 'Picture of the Moon', 'Out in the fields']
console.log(music.myPlaylist)
delete music.myPlaylist
console.log(music)

// calling a method for object *Always put paranthesis for a method*
music.mute()

console.log(music)

music.next()
music.next()
music.next()


console.log(music.currentPlayList[music.trackIdx])
console.log(music.currentTrack)

music.currentPlaylist = [
    {
      title: 'Just Ken',
      artist: 'Ryan Gosling',
      album: 'Barbie The Album',
      length: '3:43',
    }, {
      title: 'Hey Blondie',
      artist: 'Dominic Fike',
      album: 'Barbie The Album',
      length: '2:21',
    }, {
      title: 'What Was I Made For',
      artist: 'Billie Eilish',
      album: 'Barbie The Album',
      length: '3:42',
    }, {
      title: 'Dance The Night',
      artist: 'Dua Lipa',
      album: 'Barbie The Album',
      length: '2:56',
    }
  ];

  console.log(music)
  music.currentPlaylist[2].length = '3:54'
  console.log(music.currentPlaylist[2].length)