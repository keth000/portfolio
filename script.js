'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.style.boxShadow = '0 2px 10px rgba(17, 24, 21, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }, { passive: true });

    const copyBtn = document.getElementById('copy-email-btn');
    const emailToCopy = 'kethelyns.ti@gmail.com';

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailToCopy);
                
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'E-mail Copiado! ✓';
                copyBtn.style.color = 'var(--accent)';
                copyBtn.style.borderColor = 'var(--accent)';

                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.color = '';
                    copyBtn.style.borderColor = '';
                }, 2000);

            } catch (err) {
                console.error('Falha ao copiar o e-mail: ', err);
                copyBtn.innerText = 'Erro ao copiar';
            }
        });
    }
});