import os from 'os';
import path from 'path';

console.log("==================================================");
console.log("        💻 NODE.JS OS MODULE PRACTICE             ");
console.log("==================================================");

/**
 * 💡 1. OS MODULE OBJECT OVERVIEW
 * os module humein operating system ki core details direct JavaScript 
 * formats mein return karta hai jo background C++ bindings se aati hain.
 */
console.log('Operating System Wrapper Object: ', os);


/**
 * 💡 2. CPU CORES ANALYSIS
 * os.cpus() system ke har individual core ki processing detail, speed (MHz),
 * aur system execution times ka object array return karta hai.
 */
const cores = os.cpus();
console.log(`\nTotal CPU Cores : ${cores.length}`);
console.log('Core [0] Detailed Profile:');
console.dir(cores[0]);


/**
 * 💡 3. NETWORK & IP DISCOVERY
 * os.networkInterfaces() system ke saare network interfaces (Wi-Fi, Ethernet)
 * ki network addresses detail deta hai. Hum IPv4 filtering se client ki
 * non-internal local IP access kar sakte hain.
 */
console.log('\n--- 🌐 Active Network Interfaces ---');
const interfaces = os.networkInterfaces();
for (let interfaceName in interfaces) {
  const connection = interfaces[interfaceName];

  connection.forEach(detail => {
    // detail.family standard formats check karta hai ('IPv4' ya 'IPv6')
    // !detail.internal ensure karta hai ki address localhost (127.0.0.1) na ho
    if (detail.family === 'IPv4' && !detail.internal) {
      console.log(`Interface Name : ${interfaceName} | IP Address: ${detail.address}`);
    }
  });
}


/**
 * 💡 4. RAM (MEMORY) TRACKING & CONVERSION
 * os.totalmem() aur os.freemem() total aur available bytes return karte hain.
 * Bytes ko Gigabytes (GB) mein badalne ke liye hum bytes / (1024 ** 3) karte hain.
 */
console.log('\n--- 🧠 RAM Capacity Check ---');
const bytesToGB = (bytes) => (bytes / (1024 ** 3)).toFixed(2);

const totalRAM = bytesToGB(os.totalmem());
const freeRAM = bytesToGB(os.freemem());
const usedRAM = (totalRAM - freeRAM).toFixed(2);

console.log(`System Memory Status: ${usedRAM} GB used out of ${totalRAM} GB`);


/**
 * 💡 5. OS TEMPORARY DIRECTORY & HOST ENVIRONMENT
 * - os.tmpdir() operating system ka temporary file storage location return karta hai.
 * - os.platform() machine ka core platform batata hai ('win32', 'darwin', 'linux').
 * - os.userInfo() logged-in user ki details (username, home folder path) deta hai.
 */
console.log('\n--- 📁 Env & Platform Specs ---');
console.log("OS Temporary Directory :", os.tmpdir());
console.log("Current Platform Platform:", os.platform());

const userInfo = os.userInfo();
console.log("Logged-in System User  :", userInfo.username);
console.log("User Home Directory    :", userInfo.homedir);


/**
 * 💡 6. DYNAMIC CROSS-PLATFORM SYSTEM PATHS
 * Alag-alag OS (Windows vs Mac/Linux) ke setup configurations alag hote hain.
 * Windows ke liye config data APPDATA folder mein save hota hai, jabki Mac aur Linux par Home directory ke '.config' folder mein.
 */
const configPath = os.platform() === 'win32' 
  ? path.join(process.env.APPDATA, 'MyApp')
  : path.join(os.homedir(), '.config', 'myapp');

console.log("Cross-Platform App Path:", configPath);


/**
 * 💡 7. SYSTEM HEALTH MONITORING FUNCTION
 * Ek practical utility function jo server stats, uptime ko Hour/Minute/Second mein parse 
 * karke aur memory consumption % nikaal kar warning standards setup karta hai.
 */
function systemHealthDashboard() {
  const uptimeToHMS = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h}h ${m}m ${s}s`;
  };

  console.log("\n============ 📊 SERVER HEALTH DASHBOARD ============");
  console.log(`👤 Active User   : ${os.userInfo().username}`);
  console.log(`💻 OS Platform   : ${os.platform()} (${os.arch()})`);
  console.log(`⏱️ System Uptime  : ${uptimeToHMS(os.uptime())}`);
  console.log(`🧠 CPU Model     : ${os.cpus()[0].model}`);
  console.log(`⚙️ CPU Cores     : ${os.cpus().length}`);
  
  const freeMemory = os.freemem();
  const totalMemory = os.totalmem();
  const memoryPercentage = ((totalMemory - freeMemory) / totalMemory * 100).toFixed(1);
  
  console.log(`🚨 RAM Usage     : ${bytesToGB(totalMemory - freeMemory)} GB / ${bytesToGB(totalMemory)} GB (${memoryPercentage}%)`);
  
  // Enterprise Alert logic template
  if (parseFloat(memoryPercentage) > 90.0) {
    console.log("⚠️ CRITICAL WARNING: System Memory Usage is dangerously high!");
  } else {
    console.log("✅ SYSTEM HEALTH OK: Memory and processing parameters are stable.");
  }
  console.log("====================================================");
}

// Trigger monitoring dashboard
systemHealthDashboard();
