# generate array with bash
# files=(*.jpg)
# for item in $files
#do
#printf "'%s'," $item
#done

array = []

i = 0

while i < len(array):
    img = "./assets/gen1/{}".format(array[i]) # UPDATE THIS
    print("import img_{} from '{}';".format(i, img))
    i += 1

i = 0

while i < len(array):
    img = "img_{}".format(i) 
    print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{mode: 'image', image: {}}})}} >\n            <img src={{{}}} className={{ this.state.picSizeMode }} />\n          </div>".format(img, img))
    i += 1

