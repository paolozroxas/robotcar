# 🚗 Raspberry Pi Robot Car with Live Wi-Fi Video Streaming

## 🧠 Description
Control a Raspberry Pi–powered robot car over Wi-Fi, with live video streaming from the Pi’s camera to your computer.

---

## ⚙️ Initial Setup

### On the Raspberry Pi
1. Update system packages:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Install Node.js (using **nvm**):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
   source ~/.bashrc
   nvm install node
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Ensure GStreamer and camera tools are installed:
   ```bash
   sudo apt install -y gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-omx
   sudo apt install -y libraspberrypi-bin
   ```

---

## 💻 Instructions

### 1. SSH into the Raspberry Pi
From your computer:
```bash
ssh pi@raspberrypi.local
```
> 💡 If that doesn’t work, find your Pi’s IP address from your router or with:
> ```bash
> ping raspberrypi.local
> ```

If you need to reset the password:
```bash
sudo passwd pi
```

---

### 2. Clone this repository
```bash
git clone https://github.com/paolozroxas/robotcar.git
cd robotcar
```

---

### 3. Start the video stream

#### 🖥️ On your computer
First, find your computer’s local IP address:
```bash
ipconfig getifaddr en0      # macOS (Wi-Fi)
ipconfig getifaddr en1      # macOS (Ethernet)
hostname -I                 # Linux
ipconfig                    # Windows (look for IPv4 Address)
```
You’ll get something like `192.168.68.53`.

#### 📷 On the Raspberry Pi
Start the video stream to your computer’s IP:
```bash
./stream-to.sh 192.168.68.53
```
This sends a low-latency UDP video stream directly to your computer.

---

### 4. View the video stream on your computer

Instead of running a long command, simply use the provided helper script:
```bash
./connect-to-stream.sh
```

This runs the GStreamer receiver automatically and displays the live video feed.

---

### 5. Control the robot car
On the Raspberry Pi (in another SSH window):
```bash
node controls.js
```

---

## 🔮 Future Improvements
- Update to latest **Raspberry Pi OS (Bookworm)** and **Debian base**.
- Switch from legacy `raspivid` to modern `rpicam-vid` for better performance and features.
- Add WebSocket or WebRTC streaming for browser-based control.
- Integrate motor/servo control into a unified web interface.

---

## 🧩 Troubleshooting
| Issue | Possible Fix |
|--------|---------------|
| No video feed | Ensure both devices are on the same Wi-Fi and that your firewall allows UDP on port 5000 |
| Stream lags | Reduce resolution in `stream-to.sh` or lower bitrate (`-b 750000`) |
| SSH fails | Use the Pi’s IP directly: `ssh pi@<pi_ip>` |
| Camera not found | Run `vcgencmd get_camera` to verify detection |

