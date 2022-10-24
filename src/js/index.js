'use strict';

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('selected')) {
      return;
    }
    selectTab(tab);
    showInfo(tab);
  });
});

const selectTab = function (tab) {
  const selectedTab = document.querySelector('.tab.selected');
  selectedTab.classList.remove('selected');
  tab.classList.add('selected');
};

const showInfo = function (tab) {
  const infoShown = document.querySelector('.info.selected');
  infoShown.classList.remove('selected');

  const infoId = `info-${tab.id}`;

  const info = document.getElementById(infoId);
  info.classList.add('selected');
};
