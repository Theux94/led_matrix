import PIL
from PIL import Image
import json

def png2gif():
    im = Image.open('app/model/img_3.png')
    #im = im.convert('RGB').convert('P', palette=Image.ADAPTIVE)
    im.save('app/model/img.gif')
def resize():
    img = Image.open('app/model/img.png')
    if (img.size[1]>32):
        baseheight = 32
        wpercent = (baseheight / float(img.size[1]))
        wsize = int((float(img.size[0]) * float(wpercent)))
        img = img.resize((wsize, baseheight), PIL.Image.ANTIALIAS)
    img.save('app/model/img_2.png')
resize()
param = json.loads(open('app/model/workspace.json').read())
img = Image.open('app/model/img_2.png')
new_im = Image.new("RGB", ((int(int(param['width'])/3)),32))   ## luckily, this is already black!
new_im.paste(img, (int(param['x']),int(param['y'])))
new_im.save('app/model/img_3.png')
png2gif()