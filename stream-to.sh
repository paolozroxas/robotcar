#!/bin/bash
#
# Usage: ./stream-to.sh <destination_ip>
#
# Example: ./stream-to.sh 192.168.68.53
#
# Streams camera video via UDP to the given IP on port 5000.

# Exit if no argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <destination_ip>"
  exit 1
fi

DEST_IP=$1
PORT=5000

echo "🎥 Starting stream to $DEST_IP:$PORT ..."
echo "Press Ctrl+C to stop."

raspivid -t 0 -w 1280 -h 720 -fps 30 -b 1000000 -vf -hf --profile baseline -o - | \
gst-launch-1.0 -v fdsrc ! h264parse ! rtph264pay config-interval=1 pt=96 ! \
udpsink host=$DEST_IP port=$PORT

