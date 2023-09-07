function resizeMap(_) {
  const defaultImageWidth = 3973;
  const viewportWidth = window.innerWidth;
  const factor = viewportWidth / defaultImageWidth;
  document.querySelectorAll('area').forEach((areaElement) => {
    let coordsList;
    if (!areaElement.hasAttribute('data-default-coords')) {
      coordsList = areaElement.getAttribute('coords').split(',');
      areaElement.setAttribute('data-default-coords', coordsList);
    }
    coordsList = areaElement.getAttribute('data-default-coords').split(',');
    areaElement.setAttribute(
      'coords',
      coordsList.map((coord) => Math.round(coord * factor))
    );
  });
}
