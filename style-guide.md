/* variables */
:root {
  --neutral-0: hsl(0, 0%, 100%);
  --neutral-300: hsl(252, 6%, 83%);
  --neutral-900: hsl(248, 70%, 10%);
  --orange-500: hsl(7, 88%, 67%);
  --orange-700: hsl(7, 71%, 60%);
  --font-family: 'Inconsolata', monospace;
}

body {
  margin: 0;
  background-color: var(--neutral-900);
  background-image: url('assets/images/pattern-lines.svg');
  background-size: cover;
  color: var(--neutral-0);
  font-family: var(--font-family);
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.header img {
  width: 180px;
  margin-bottom: 2rem;
}

.form-container {
  background-color: rgba(0,0,0,0.7);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

h1 {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

p {
  font-size: 16px;
}

.form-group {
  margin-top: 1rem;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid var(--neutral-300);
  border-radius: 0.5rem;
  background: var(--neutral-0);
  color: var(--neutral-900);
  font-family: var(--font-family);
}

.upload-box {
  border: 2px dashed var(--neutral-300);
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  position: relative;
}

.upload-box input[type="file"] {
  opacity: 0;
  position: absolute;
  inset: 0;
  cursor: pointer;
}

button {
  margin-top: 1rem;
  width: 100%;
  padding: 0.8rem;
  background: var(--orange-500);
  color: var(--neutral-0);
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: var(--orange-700);
}

.ticket-container {
  margin-top: 2rem;
  text-align: center;
}
.ticket-container.hidden {
  display: none;
}

.ticket {
  margin-top: 1rem;
  display: flex;
  background: rgba(255,255,255,0.05);
  border-radius: 1rem;
  overflow: hidden;
  max-width: 600px;
}
.ticket-left {
  flex: 2;
  padding: 1rem;
}
.ticket-right {
  flex: 1;
  background: var(--neutral-900);
  color: var(--neutral-0);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl;
}
.ticket-info h3 {
  margin: 0;
}
.ticket-user {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.ticket-user img {
  border-radius: 50%;
  width: 50px;
  margin-right: 0.5rem;
}
.ticket-user-data {
  text-align: left;
}
.ticket-right img {
  width: 30px;
  opacity: 0.5;
}
.ticket-logo {
  width: 30px;
}
@media (max-width: 768px) {
  .ticket {
    flex-direction: column;
  }
  .ticket-right {
    writing-mode: horizontal-tb;
  }
}
