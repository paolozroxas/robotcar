raspivid -t 0 -vf -hf -w 1280 -h 720 -fps 25 -b 2000000 -o - | cvlc -vvv stream:///dev/stdin --sout '#standard{access=http,mux=ts,dst=:8080}' :demux=h264
