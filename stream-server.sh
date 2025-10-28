raspivid -t 0 -w 1280 -h 720 -fps 30 -b 1500000 -vf -hf --profile baseline -o - | \
gst-launch-1.0 -v fdsrc ! h264parse ! rtph264pay config-interval=1 pt=96 ! \
udpsink host=0.0.0.0 port=5000
