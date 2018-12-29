import subprocess 
from random import *

videoID = ''

numSegments = 3 # this includes the 0th segment, so, if they're numbered 0 to 5, there are 6 segments

randomNumber = randint(1, 10000)

fileNameTS = 'video_{}.ts'.format(randomNumber)

f = open(fileNameTS, 'a')

print('File {} created'.format(fileNameTS))

cookie = ''
referer = 'https://hutt.co/NaughtyThrowawayF/'

i = 0
while i < numSegments:
    segmentID = '{0:0{width}}'.format(i, width=5)
    
    callToMake = "curl --location 'https://hutt.co/video/{}/segment_{}.ts' -H 'DNT: 1' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Mobile Safari/537.36' -H 'Accept: */*' -H 'Referer: {}' -H 'Cookie: {}' -H 'Connection: keep-alive' --compressed".format(videoID, segmentID, referer, cookie)

    subprocess.call(callToMake, shell=True, stdout=f) 

    i += 1

f.close()

print("All done downloading! Now converting...")
convertedVideoFileName = 'video_{}.mp4'.format(randomNumber)

callToMake = 'ffmpeg -i {} -acodec copy -vcodec copy {}'.format(fileNameTS, convertedVideoFileName)

subprocess.call(callToMake, shell=True) 

print("Converted to {}!".format(convertedVideoFileName))
