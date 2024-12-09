document.addEventListener('DOMContentLoaded', () => {
    const tankElements = document.querySelectorAll('#grid-container div');
    let currentOpenTank = null;
  
    const tankInfo = {
      OBJECT140: {
        title: 'OBJECT140',
        description: 'Цей танк має високу маневреність та потужний рушійний механізм.',
      },
      T62A: {
        title: 'T62A',
        description: 'Це радянський основний бойовий танк середини 1960-х років, оснащений потужною гарматою.',
      },
      E100: {
        title: 'E100',
        description: 'Німецький важкий танк, який вражає своєю бронею і сильною гарматою.',
      },
      MAUS: {
        title: 'MAUS',
        description: 'Мега-тяжкий німецький танк з найвищим рівнем броні, що був розроблений під час || світової війни.',
      },
      T110E5: {
        title: 'T110E5',
        description: 'Американський основний бойовий танк, який поєднує потужну броню та високу мобільність.',
      },
    };
  
    tankElements.forEach((tank) => {
      const tankName = tank.querySelector('h1').textContent;
  
      tank.addEventListener('click', () => {
        if (currentOpenTank === tankName) {
          closeTankInfo();
        } else {
          const info = tankInfo[tankName];
          if (info) {
            displayTankInfo(info);
            currentOpenTank = tankName;
          }
        }
      });
    });
  
    function displayTankInfo(info) {
      const tankContainer = document.getElementById('tankContainer');
      tankContainer.innerHTML = `
        <div class="tank-info-box">
          <h1>${info.title}</h1>
          <p>${info.description}</p>
        </div>
      `;
    }
  
    function closeTankInfo() {
      const tankContainer = document.getElementById('tankContainer');
      tankContainer.innerHTML = '';
      currentOpenTank = null;
    }
  })