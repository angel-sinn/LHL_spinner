function spinner() {
  const spinnerIcons = ["|", "/", "-", "\\", "|"];
  let delay = 0;
  for (const icon of spinnerIcons) {
    setTimeout(() => {
      process.stdout.write(`\r${icon}`);
    }, (delay += 200));
  }
  // to fix the new line at the end
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
}

spinner();
