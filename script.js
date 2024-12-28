document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent; // Ambil teks dari elemen
    textElement.innerHTML = ''; // Kosongkan elemen sebelum diisi ulang

    // Pecah teks menjadi huruf dan bungkus dengan <span>
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; // Ganti spasi dengan non-breaking space
        span.style.animationDelay = `${index * 0.1}s`; // Penundaan animasi per huruf
        span.style.display = 'inline-block';
        textElement.appendChild(span);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent; // Ambil teks dari elemen
    textElement.innerHTML = ''; // Kosongkan elemen sebelum diisi ulang

    // Pecah teks menjadi kata dan bungkus dengan <span>
    text.split(' ').forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.animationDelay = `${index * 0.3}s`; // Penundaan animasi per kata
        span.style.marginRight = '0.5rem'; // Tambahkan jarak antar kata
        span.style.display = 'inline-block';
        textElement.appendChild(span);
    });
});
