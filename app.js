
            const dir = document.getElementById('flex-dir');
            const jc = document.getElementById('flex-jc');
            const canv = document.getElementById('flex-canvas');

            function applyFlex() {
                canv.style.flexDirection = dir.value;
                canv.style.justifyContent = jc.value;
            }
            [dir, jc].forEach(el => el.addEventListener('change', applyFlex));
        