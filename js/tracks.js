// document.addEventListener("DOMContentLoaded", function () {
    fetch('js/tracks.json')
        .then(response => response.json())
        .then(data => {
            const tabsIndex = document.getElementById("nav-tab");
            const tabsContent = document.getElementById("nav-tabContent");
            const dataTabs = data.tabs;
            var tId = 0;
            // Append HTML to div
            for (const tab of dataTabs) {
                tId = tId+1;
                tabsIndex.innerHTML +=
                `<a class="nav-link btn-link tab-back ${tab.active}" id="${tab.name}-tab" data-bs-toggle="tab" style="text-decoration: none;" href="#${tab.name}" role="tab" aria-controls="${tab.name}" aria-selected="false">${tab.tabTit}</a>`;
                tabsContent.innerHTML +=
                `<!-- TAB-M${tab.n_tab} -->
                <div class="tab-pane fade ${tab.active}" id="${tab.name}" role="tabpanel" aria-labelledby="${tab.name}-tab">
                  <!-- accordion panel -->
                  <div class="land-2 accordion" id="accordion-${tab.n_tab}">
                    <div class="card mb-2 p-1">
                      <div class="card-header border-0 px-0 py-1" id="heading-${tab.n_tab}">
                        <h2 class="card-tit mb-0 px-2">
                          <button id="${tab.tabId}" class="btn btn-link list-tit py-1 w-100" style="text-decoration: none;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${tab.n_tab}" aria-expanded="true" aria-controls="collapse-${tab.n_tab}">T R A C K S</button>
                        </h2>
                      </div>
  
                      <div id="collapse-${tab.n_tab}" class="${tab.collapse}" aria-labelledby="heading-${tab.n_tab}" data-bs-parent="#accordion-${tab.n_tab}">
                        <div id="tab-${tab.n_tab}" class="card-body">
                          <p>
                            <strong>${tab.title}</strong>${tab.text}
                          </p>`;
                const dataTracks = tab.tracks;
                var tabTracks = document.getElementById(`tab-${tab.n_tab}`);
                for (const track of dataTracks) {
                  tabTracks.innerHTML +=
                  `<!-- Track ${track.trackId} -->
                  <span class="d-flex justify-content-between">
                    <i class="bi bi-soundwave py-1"></i>
                    <h6 class="py-1 m-0">${track.name}<small>${track.year}</small></h6>
                    <span data-bs-toggle="tooltip" title="Lyrics" data-bs-placement="auto" data-bs-delay="300">
                    <button type="button" class="btn btn-secondary btn-info mb-1 px-2" data-bs-toggle="modal" data-bs-target="#modal-T${tId}-${track.trackId}" data-bs-whatever="Lyrics" data-bs-dismiss="modal" aria-hidden="true"><i class="bi bi-journal-richtext"></i>
                    </button>
                    </span>
                  </span>
                  <audio class="w-100 p-1" controls controlsList="nodownload" preload="metadata">
                  <source src="assets/${track.file}" type="audio/mpeg">
                  Your browser does not support the audio tag.</audio> 
                  <br>`;
                }
                tabsContent.innerHTML +=
                `</div>
                </div>
                <!-- TAB-M${tab.n_tab} ends-->`;
            }
            tabsContent.innerHTML +=
            `       </div>
                  </div>
                </div>`;
            tabsIndex.innerHTML +=
            `<a class="nav-link btn-link tab-back" style="text-decoration: none;" id="nav-feedback-tab" data-bs-toggle="tab" href="#nav-feedback" role="tab" aria-controls="nav-feedback" aria-selected="false">Hi</a>`;
        })
        .catch(error => console.error("Error fetching JSON data:", error));
// });
