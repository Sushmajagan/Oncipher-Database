let score = 0;

document.querySelectorAll('.gene').forEach(gene => {
  gene.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', gene.id);
  });
});

document.querySelectorAll('.cancer').forEach(cancer => {
  cancer.addEventListener('dragover', e => e.preventDefault());

  cancer.addEventListener('drop', e => {
    const draggedGene = e.dataTransfer.getData('text');
    const correctGene = cancer.getAttribute('data-match');

    if (draggedGene === correctGene) {
      cancer.classList.add('correct');
      cancer.innerHTML += ` ✅ (${draggedGene})`;
      document.getElementById(draggedGene).remove();
      score++;
    } else {
      cancer.classList.add('incorrect');
      setTimeout(() => cancer.classList.remove('incorrect'), 1000);
    }
  });
});

function submitScore() {
  const user = prompt("Enter your name:");
  if (!user) return alert("Name required.");

  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score })
  })
    .then(res => res.json())
    .then(data => {
      alert(`${data.message}. You scored ${score} point(s)!`);
      location.reload();
    });
}
