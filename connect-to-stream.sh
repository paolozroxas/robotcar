gst-launch-1.0 -v udpsrc address=239.255.42.42 port=5000 auto-multicast=true \
caps="application/x-rtp,encoding-name=H264,payload=96" \
! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink sync=false
