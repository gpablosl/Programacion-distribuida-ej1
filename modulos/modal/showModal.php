<h1>Modal</h1>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<button type="button" class="btn btn-primary" onclick="llenarModal('pirata.jpg');">Mostrar jinete</button>
<button type="button" class="btn btn-primary" onclick="llenarModal('mencho.jpg');">Mostrar señor</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" id="dvModalContainer">

    </div>
  </div>
</div>