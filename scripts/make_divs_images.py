# generate array with bash
# files=(*.jpg)
# for item in $files
#do
#printf "'%s'," $item
#done

array = []

i = 0

while i < len(array):
    img = "./assets/eturner/pics/{}".format(array[i]) # UPDATE THIS
    print("import image_{} from '{}';".format(i, img))
    i += 1

i = 0

while i < len(array):
    img = "image_{}".format(i) 
    print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{mode: 'image', image: {}}})}} >\n            <img src={{{}}} className={{ this.state.picSizeMode }} />\n          </div>".format(img, img))
    i += 1

