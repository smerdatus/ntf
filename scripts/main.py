import re
import collections

f = open("./images_and_videos.txt","r")
f1 = f.readlines()

dictionary = collections.defaultdict(list)

for line in f1:
    split = re.split(r"_\d+_\d+_\d+_n.", line)
    user = split[0]
    fileType = split[1].rstrip()
    if fileType == 'jpg':
        dictionary[user].append(line)
    else:
        print("{} has a video!!".format(user))

f.close()

# PSEUDOCODE:
# for each user, generate images like import `username_i` from 'file'
# then import them; figure out how to display them and navigate

# for item in dictionary:
for name, values in sorted(dictionary.items(), key=lambda x: x[0]):
    # link = 'https://instagram.com/{}'.format(name)
    # print '<a href="{}" target="_blank">{}</a>'.format(link, name)
    i = 0
    for value in values:
        img = "./assets/{}".format(value.rstrip()) # UPDATE THIS
        print("import img_{}_{} from '{}';".format(name, i, img))
        i += 1
    print "\n\n"
    i = 0

    print("<div style={{{{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}}}>\n    <a href='https://instagram.com/{}' target='_blank'>{}</a>\n</div>\n<div style={{{{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}}}>".format(name, name))
        
      
        # <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_0})} >
        #   <img src={img_0} style={{height: '20vh'}} />
        # </div>

    for value in values:
        img = "img_{}_{}".format(name, i) 
        print("    <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{image: {}}})}}>\n        <img src={{{}}} style={{{{height: '20vh'}}}} />\n    </div>".format(img, img))
        i += 1
    
    print("</div>\n</div>")
    print "\n\n\n\n\n"

# array = []

# i = 0

# while i < len(array):
#     img = "./assets/{}".format(array[i]) # UPDATE THIS
#     print("import img_{} from '{}';".format(i, img))
#     i += 1

# i = 0

# while i < len(array):
    # img = "img_{}".format(i) 
    # print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{video: {}}})}}>\n            <img src={{{}}} style={{{{height: '20vh'}}}} />\n          </div>".format(video, img))
    # i += 1