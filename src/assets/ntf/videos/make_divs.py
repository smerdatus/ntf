# generate array with bash
# files=(*.mp4)
# for item in $files
#do
#printf "'%s'," $item
#done

array = ['01 jump out of bikini.mp4','02 pigtail.mp4','03 boobie bounce.mp4','04 some booty.mp4','05 boobies squeeze.mp4','06 daddys lil monster.mp4','07 public-flash.mp4','08 bathroom flash.mp4','09 robe.mp4','10 stanford.mp4','11 red dress slowmo.mp4','12 bouncing slow.mp4','13 bouncing out of top.mp4','14 black sweater.mp4','15 hottub.mp4','16 towel.mp4','17 shower.mp4','18 batman_sideway.mp4','19 batman fan.mp4','20 swimsuit.mp4','21 deleted reddit video.mp4','22 getting ready for bath.mp4','23 oiling tits.mp4','24 bathroom choker.mp4','25 bored at night pt1.mp4','26 bored at night pt2.mp4','27 bored at night pt3.mp4','28 finally back home.mp4','29 shower video version.mp4','30 lips.mp4','31 full outfit.mp4','32 pale.mp4','33 wonder woman.mp4','34 plug.mp4','35 dress.mp4','36 guess under.mp4','37 jumper.webm','CoarsePoliticalIchidna.webm','PastGreedyDaddylonglegs.webm','AdvancedDimCavy-mobile.mp4','DentalRectangularBluegill-mobile.mp4','FamousFixedCoral-mobile.mp4','GiantNimbleChinchilla-mobile.mp4','RarePessimisticArgentineruddyduck-mobile.mp4','ThatShimmeringBlacknorwegianelkhound-mobile.mp4','ThirstyMiserableGuineapig-mobile.mp4']

i = 0

while i < len(array):
    video = "./assets/ntf/videos/{}".format(array[i])
    img = "{}.png".format(video) 
    print("import video_{} from '{}';".format(i, video))
    print("import img_{} from '{}';".format(i, img))
    i += 1

i = 0

while i < len(array):
    video = "video_{}".format(i)
    img = "img_{}".format(i) 
    print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{video: {}}})}}>\n            <img src={{{}}} style={{{{height: '20vh'}}}} />\n          </div>".format(video, img))
    i += 1