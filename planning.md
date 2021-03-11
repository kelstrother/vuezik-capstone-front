<hr>

# ____________________Tone. Pusher

<hr>

### <u>Project Phases</u>

| Phase One | Phase Two| Phase Three |
| :---: |  :---: | :---: |

<img src="https://media.giphy.com/media/6utVzLiyU9OuHbd70D/giphy.gif" width="250" height="130">|
<img src="https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif" width="250" height="130"> |
<img src="https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif" width="250" height="130">

<hr>

## ------------------------------ <u>Frontend</u> -------------------------

### <u>Links</u>

* [GitHub (Frontend)](https://github.com/kelstrother/vuezik-capstone-front)
* [Netlify Deployment](https://vuezic.web.app/)
* [Mobile Wireframe Main](https://res.cloudinary.com/kels-cloud/image/upload/v1614636532/Capstone/Capstone-mobile-song_cdbvn5.jpg)
* [Mobile Wireframe Playlist](https://res.cloudinary.com/kels-cloud/image/upload/v1614636529/Capstone/capstone-mobile-pl_tewnqq.jpg)

### <u>Project Overview</u>

A basic mp3 player that allows users to download, play, and upload songs. They will also be able to create playlists using those songs.

### <u>MVP</u> (Frontend)

* Build player interface
* Build components
* Create basic functionality
* Render data/songs on page
* Basic Styling

### <u>Post MVP</u> (Frontend)

* Create interactive animations.
* Include an option for a playable virtual instrument.
* Ability to stream the audio.
* Favorites

### <u>Components</u>

| Component | Description |
| --- | :---: | :---: |
| App | This will render the audio player's UI.|
| Songs | This will render the audio available audio files.|
| ControlBar | This will be the bar at the bottom with all the controls.|
| Playlist | User's playlist |
| UploadForm| Will allow user to upload their own audio files.|

### <u>Time Estimation</u>

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 4hrs| N/A | N/A |
| Songs | H | 4hrs| N/A | N/A |
| ControlBar | H | 4hr| N/A | N/A |
| Playlist | H | 4hrs| N/A | N/A |
| UploadForm | H | 8hrs| N/A | N/A|
| Styling | H | 15hrs| N/A | N/A|
| Total | H | 39hrs| hrs | hrs |

#### <u>Additional Libraries</u>

N/A

#### <u>Code Snippet</u>

<hr>

## ------------------<u>Backend with Firebase</u>-----------------

### <u>Links</u>


### <u>User Stories</u>

User can view all available songs. (GET)
User can select and play specific songs. (GET)
User can upload songs. (POST)
User can Delete songs. (DELETE)

### <u>Models</u>

##### Catalog

* belongs to song
* belongs to playlist

##### Song

* has many :catalogs
* has many playlists through catalogs

##### Playlist

* has many :catalogs
* has many songs through catalogs

### <u>MVP</u> (Backend)

* Build out backend with ability to store audio files via Rails active storage.
* CRUD route functionality.
* Upload Functionality.

### <u>Post MVP</u> (Backend)

* Incorporate third party storage for streaming capability.
* Incorporate albums and more artists into the app

#### <u>Additional Libraries</u>

N/A

### <u>Time Estimation</u>

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build Server | H | 4hrs| N/A |
| CRUD | H | 4hrs| N/A |
| Seed Data | H | 8hr| N/A |
| Upload Functionality | H | 6hrs| N/A |
| S3 Storage | M | 9hrs | N/A |
| Total || 27hrs |  N/A |
