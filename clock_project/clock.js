setInterval(() => {
    const d = new Date();
    const htime = d.getHours(); // Fixed method
    const mtime = d.getMinutes(); // Fixed method
    const stime = d.getSeconds(); // Fixed method

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


