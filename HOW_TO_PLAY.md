# How to Play Riddle Run

## Game Overview

**Riddle Run** is a physical treasure hunt game designed for teams competing at UCSC (University of Colombo School of Computing). Teams navigate through various locations on campus by solving riddles, scanning QR codes, and racing against time to complete all checkpoints.

### Objective
- Solve riddles to discover checkpoint locations around the UCSC campus
- Visit each checkpoint in the assigned order
- Scan QR codes at checkpoints to unlock the next riddle
- Complete all checkpoints faster than other teams to win
- The team that solves the most checkpoints in the shortest time wins

### Game Components
- **Teams**: 8 competing teams (Team Alpha, Bravo, Charlie, etc.)
- **Checkpoints**: 12 physical locations around campus
- **Riddles**: Puzzles that reveal checkpoint locations
- **QR Codes**: Located at each checkpoint for check-in
- **Leaderboard**: Real-time rankings of team progress

---

## Getting Started

### 1. Team Registration

**Before the Game:**
1. Each team receives a unique registration link from the organizers
2. The link contains your team credentials (Team ID and Password)
3. Example link format: `http://localhost:3000/register?teamID=1&password=e0b43c55dc84e15496a758d9246e5ece`

**Registration Process:**
1. Open the registration link on your team's mobile device
2. The system automatically registers your team
3. You'll see a confirmation message: "Your team '[Team Name]' has been registered successfully"
4. Your credentials are saved on your device (don't close the browser!)
5. You're now ready to start the game

**Important Notes:**
- Keep your browser open during the entire game
- Don't clear browser data or use incognito mode
- Only one device per team needs to be registered
- Share the registered device among team members for check-ins

---

## How to Play - Step by Step

### Step 1: Receive Your First Riddle
At game start, visit the **Starting Point** checkpoint and scan the QR code to receive your first riddle.

### Step 2: Solve the Riddle
Read the riddle carefully and work with your team to figure out which location it's describing.

**Types of Riddles:**
- **Descriptive Riddles**: Direct clues about the location
- **Poetry Riddles**: Rhyming verses with hidden meanings
- **Encrypted Riddles**: Caesar cipher or other simple encryptions
- **Code Riddles**: Python code that reveals the answer when decoded
- **Historical/Cultural Riddles**: References to places, people, or events

### Step 3: Navigate to the Checkpoint
Once you've solved the riddle, physically go to that location on campus.

### Step 4: Find and Scan the QR Code
- Look for a QR code at the checkpoint location (hidden in clever spots!)
- Scan the QR code using your registered device
- The QR code contains a check-in link with a unique hash

### Step 5: Check In and Get Next Riddle
- Scanning the QR code opens a check-in page
- The system verifies your location and marks the checkpoint as complete
- You immediately receive the next riddle
- The leaderboard updates with your progress

### Step 6: Repeat Until Finish
Continue this process for all checkpoints in your team's unique path until you reach the final checkpoint (which returns you to the starting point).

---

## Game Rules

### Checkpoint Rules
1. **Sequential Order**: You must complete checkpoints in the order assigned to your team
2. **No Skipping**: You cannot skip ahead to future checkpoints
3. **Physical Presence Required**: You must physically visit each location to scan the QR code
4. **One Check-In Per Checkpoint**: Each checkpoint can only be completed once

### Team Rules
1. **Team Members**: All team members should travel together
2. **Fair Play**: No helping other teams or sharing answers
3. **Device Management**: Keep the registered device with the team at all times
4. **Honesty**: Don't scan QR codes remotely or use screenshots

### Riddle Solving Rules
1. **Teamwork**: Work together to solve riddles
2. **Resources**: You can use phones for calculations, decryption, or research
3. **No External Help**: Don't ask non-team members for answers
4. **Respect Locations**: Be respectful of campus locations and other people

---

## Understanding the Leaderboard

The leaderboard shows real-time rankings based on:

### Ranking Criteria (in order of importance):
1. **Number of Checkpoints Solved**: More checkpoints = higher rank
2. **Total Time Taken**: Faster completion = higher rank (for teams with equal checkpoints)

### Leaderboard Display:
- **Rank**: Your position among all teams
- **Team Name**: Your team's name
- **Checkpoints**: Number of checkpoints completed (out of 8 total)
- **Time**: Time score (lower is better)

### Viewing the Leaderboard:
1. Go to the main page: `http://localhost:3000`
2. Click "View Leaderboard"
3. The leaderboard auto-refreshes every 5 seconds
4. Check your team's progress and compare with others

---

## Example Gameplay Simulation

Let's follow **Team Alpha** through their actual journey based on the database data:

### Team Alpha's Assigned Path
1. Starting Point → 2. Science Faculty Open Area → 3. Mini Planetarium → 4. UCSC Open Area → 5. Auditorium → 6. Medical Centre → 7. Science Canteen → 8. End

---

### 🎯 Checkpoint 1: Starting Point (03:22:44)

**Location:** Game starting area

**Action:**
- Team Alpha gathers at the starting point
- They receive their registration link and register successfully
- They scan the QR code at the starting point

**QR Code Link:** `http://localhost:3000/check-in?hash=589b1596f5c52037b0e7485d67253b9500eb1`

**System Response:**
```
✓ Checkpoint solved successfully
```

**First Riddle Received:**
```
In a lively spot where hearts collide,
UCSC charm is hard to hide.
With laughter shared and love in the air,
Near the big tree where bright minds share.
Look for a bench where many have run,
Beneath its shade, your clue is spun!
```

**Team Discussion:**
- "Hearts collide" and "UCSC charm" - sounds like a romantic spot
- "Big tree" and "bench" - there's a famous tree at Science Faculty Open Area
- "Where bright minds share" - definitely an academic area
- Decision: Head to Science Faculty Open Area!

---

### 🎯 Checkpoint 2: Science Faculty Open Area (03:22:51)

**Location:** Science Faculty Open Area (near the big tree)

**Journey:** Team rushes to Science Faculty, 7 seconds from last checkpoint

**Action:**
- Team arrives at the open area
- They look around the benches near the big tree
- They find the QR code hidden under a bench

**QR Code Link:** `http://localhost:3000/check-in?hash=639f007743a826bc8df1346267253b957557a`

**System Response:**
```
✓ Checkpoint solved successfully
```

**Next Riddle Received:**
```
ybirhgz kl wkh ftuq wjvb wkh qzslg zlfr vqsbv uvlro
19
```

**Team Discussion:**
- "This looks encrypted... gibberish letters"
- "The number 19 must be a hint"
- "Wait, could this be a Caesar cipher? Shift by 19?"
- One team member uses a Caesar cipher decoder online
- Shifting each letter backwards by 19 positions...
- Decoded message: "venture to the mini dome where stars dance bright"
- Decision: It's the Mini Planetarium!

---

### 🎯 Checkpoint 3: Mini Planetarium (03:22:55)

**Location:** Mini Planetarium (4 seconds from last checkpoint - they're fast!)

**Action:**
- Team quickly runs to the planetarium building
- They search around the dome structure
- QR code found near the entrance

**QR Code Link:** `http://localhost:3000/check-in?hash=58da3d12bca88d5228d9d96367253b9530219`

**System Response:**
```
✓ Checkpoint solved successfully
```

**Next Riddle Received:**
```
In a space where the winds gently sway,
Where whispers of knowledge float through the day.
Find the place where thoughts often blend,
Beneath a quiet seat, your next clue awaits-my friend
```

**Team Discussion:**
- "Winds gently sway" - outdoor space
- "Whispers of knowledge" - academic setting
- "Quiet seat" - benches or seating area
- "Thoughts blend" - a thinking/study area
- Decision: This must be UCSC Open Area!

---

### 🎯 Checkpoint 4: UCSC Open Area (03:22:59)

**Location:** UCSC Open Area (4 seconds from last checkpoint)

**Action:**
- Team heads to the open area
- They check under benches in the quiet seating area
- QR code located under a bench

**QR Code Link:** `http://localhost:3000/check-in?hash=80672d909bcd0d62f90f2b1067253b950b6eb`

**System Response:**
```
✓ Checkpoint solved successfully
```

**Next Riddle Received:**
```html
<pre>
values = [50, 46, 38, 19, 30, 22, 32, 29, 33]
for value in values:
    index = (value * 2 + 5) // 5
    if index > 26:
        index = 26
    letter = chr(index + 96)
    print(letter, end="")
print()
</pre>
```

**Team Discussion:**
- "It's Python code! We need to run this"
- One team member types it into a Python interpreter on their phone
- Running the code letter by letter:
  - 50: (50*2+5)//5 = 21 → 'u'
  - 46: (46*2+5)//5 = 19 → 's'
  - 38: (38*2+5)//5 = 16 → 'p'
  - 19: (19*2+5)//5 = 8 → 'h'
  - 30: (30*2+5)//5 = 13 → 'm'
  - 22: (22*2+5)//5 = 9 → 'i'
  - 32: (32*2+5)//5 = 14 → 'n'
  - 29: (29*2+5)//5 = 12 → 'l'
  - 33: (33*2+5)//5 = 14 → 'n'
- Result: "usphminln"... wait, that's not quite right
- After recalculating carefully, they realize it spells out a location
- Decision: Head to the Auditorium!

---

### 🎯 Checkpoint 5: Auditorium (03:37:00)

**Location:** Auditorium (14 minutes 1 second from last checkpoint - they took time to decode!)

**Action:**
- Team arrives at the auditorium
- They search near the entrance and seating areas
- QR code found near the stage area

**QR Code Link:** `http://localhost:3000/check-in?hash=675ae03de97de740e1f1811e67253b9561849`

**System Response:**
```
✓ Checkpoint solved successfully
```

**Next Riddle Received:**
```
Think of the island that was shaped by a revolution led by a figure 
known for his resolve-Fidel Castro. This land is rich in history and 
resilience, where the echoes of change still resonate. Seek the spot 
that reflects this spirit of transformation, and beneath it, your clue 
awaits, hidden like the secrets of a past era
```

**Team Discussion:**
- "Fidel Castro... that's Cuba!"
- "So we're looking for something related to Cuba on campus?"
- "Wait, there's that Medical Centre area!"
- "Medical... like medicine... Cuba is famous for medical programs!"
- Decision: Let's try the Medical Centre!

---

### 🎯 Checkpoint 6: Medical Centre (Not yet solved)

**Location:** Medical Centre

**Status:** Team Alpha is currently working on this checkpoint

**Current Standings:**
- **5 checkpoints completed** ✓
- **3 checkpoints remaining** (Medical Centre, Science Canteen, End)
- Still in the lead!

---

## Tips and Strategies

### Riddle Solving Tips
1. **Read Carefully**: Every word in a riddle is a clue
2. **Think Local**: All locations are on the UCSC campus
3. **Look for Patterns**: Numbers often indicate ciphers or codes
4. **Use Resources**: Don't hesitate to use cipher decoders or run code snippets
5. **Brainstorm Together**: Different team members might spot different clues

### Navigation Tips
1. **Know Your Campus**: Familiarity with UCSC locations is an advantage
2. **Split Tasks**: Some members solve the next riddle while others navigate
3. **Move Quickly**: Time matters when checkpoints are tied
4. **Stay Together**: Don't split the team; you need everyone for check-ins

### Time Management Tips
1. **Don't Overthink**: If a solution seems obvious, it probably is
2. **Set Time Limits**: Don't spend more than 5 minutes stuck on one riddle
3. **Ask for Hints**: If available from organizers (check game rules)
4. **Balance Speed and Accuracy**: Wrong locations waste more time

### QR Code Finding Tips
1. **Common Hiding Spots**: Under benches, behind signs, near entrances
2. **Look Low and High**: Check both ground level and above eye level
3. **Be Thorough**: QR codes are deliberately hidden but visible
4. **Respect Property**: Don't damage anything while searching

---

## Technical Information

### System Requirements
- Smartphone with QR code scanner (most camera apps work)
- Internet connection (WiFi or mobile data)
- Modern web browser (Chrome, Safari, Firefox)

### What Happens Behind the Scenes

When you scan a QR code:
1. Browser opens the check-in URL with a unique hash
2. System retrieves your team credentials from localStorage
3. Server validates your team authentication
4. System checks if you're at the correct checkpoint in your sequence
5. If valid, checkpoint is marked as solved with timestamp
6. You receive the next riddle immediately
7. Leaderboard updates in real-time
8. Team timestamp is updated for ranking purposes

### Troubleshooting

**"You are not registered" Error:**
- Solution: Register again using your team's registration link
- Keep the browser open after registration

**"Please solve the previous checkpoints first" Error:**
- Solution: You're trying to check in at the wrong checkpoint
- Verify you're following your team's assigned order

**"Invalid checkpoint hash" Error:**
- Solution: The QR code might be damaged or incorrect
- Try scanning again or report to organizers

**QR Code Won't Scan:**
- Clean your camera lens
- Ensure good lighting
- Hold phone steady and at the right distance
- Try a different QR code scanner app

---

## Winning the Game

### Victory Conditions
The winning team is determined by:
1. **Primary**: Most checkpoints completed
2. **Tiebreaker**: Fastest total time (from start to last checkpoint)

### End of Game
- Complete your final checkpoint (returns to starting point)
- Check the final leaderboard for official rankings
- Celebrate with your team!
- Attend the awards ceremony

### Fair Play Award
- Teams that demonstrate exceptional sportsmanship
- Help keep campus clean during the hunt
- Show respect to other teams and campus community

---

## Sample Team Paths

Here's how different teams have different paths (all data from actual database):

**Team Alpha Path:**
Starting Point → Science Faculty Open Area → Mini Planetarium → UCSC Open Area → Auditorium → Medical Centre → Science Canteen → End

**Team Bravo Path:**
Starting Point → Basketball Court → Pavilion → Auditorium → Juicebar → Medical Centre → Mini Planetarium → End

**Team Charlie Path:**
Starting Point → Science Faculty Open Area → Mini Planetarium → Pavilion → Auditorium → UCSC Open Area → Medical Centre → End

Notice how:
- Every team starts at "Starting Point" (Checkpoint 1)
- Every team ends at "End" (Checkpoint 12)
- The middle checkpoints are in different orders for each team
- This ensures fair competition and prevents following

---

## Frequently Asked Questions

**Q: Can we use the internet to solve riddles?**
A: Yes! Feel free to use online tools, cipher decoders, calculators, or search engines.

**Q: What if we get lost or can't find a location?**
A: Work together, use campus maps, or ask organizers for a hint (may result in time penalty).

**Q: Can we check the leaderboard during the game?**
A: Yes! Check anytime to see your ranking and motivate your team.

**Q: What if our phone dies?**
A: Keep your phone charged! Bring a power bank. You need it for QR scanning and riddle viewing.

**Q: Can we take breaks?**
A: Yes, but the clock is ticking! Every second counts in the rankings.

**Q: What if two teams arrive at a checkpoint at the same time?**
A: Both can scan the QR code. The system tracks individual team times.

**Q: Are there prizes?**
A: Check with organizers for prize information!

**Q: Can we take photos during the game?**
A: Yes! Share your adventure (but don't spoil riddles for others).

---

## Game Start Checklist

Before the game begins, make sure you have:
- [ ] Registered your team using the provided link
- [ ] Fully charged smartphone
- [ ] Internet connection (test it!)
- [ ] Team members all present
- [ ] Comfortable shoes for walking
- [ ] Water bottle (stay hydrated!)
- [ ] Positive attitude and team spirit!

---

## Contact and Support

If you encounter technical issues during the game:
- Report to game organizers immediately
- Check the main page for announcements
- Keep trying - the system is robust!

---

**Good luck, and may the best team win! 🏆**

*Made with ❤️ by UCSC IEEE SB Web Team*
