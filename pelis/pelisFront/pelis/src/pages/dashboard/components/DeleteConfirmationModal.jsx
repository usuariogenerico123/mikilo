export function DeleteConfirmationModal(){
    return (
        // <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 z-50 hidden">
        <div class="modal-overlay absolute inset-0" onclick="closeDeleteModal()"></div>
        <div class="modal-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-2xl p-8 text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                <i class="fas fa-trash-alt text-2xl text-red-400"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">¿Eliminar película?</h3>
            <p class="text-gray-400 text-sm mb-6">Estás a punto de eliminar "<span id="deleteMovieName" class="text-white font-medium"></span>". Esta acción no se puede deshacer.</p>
            <div class="flex items-center justify-center gap-3">
                <button onclick="closeDeleteModal()" class="btn-secondary px-6 py-3 rounded-xl text-sm font-medium text-gray-300">
                    Cancelar
                </button>
                <button onclick="confirmDelete()" class="btn-danger px-6 py-3 rounded-xl text-sm font-medium text-white">
                    <i class="fas fa-trash mr-2"></i>Eliminar
                </button>
            </div>
        </div>
    </div>
    )
}