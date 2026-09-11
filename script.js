const jobs = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    company: 'Nexora Labs',
    location: 'San Francisco, CA',
    salary: '$120k – $160k',
    salaryMin: 120,
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    posted: '2 days ago',
    logo: 'fas fa-cube',
    logoBg: 'bg-teal-50',
    logoColor: 'text-teal-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur adipiscing',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet']
  },
  {
    id: 2,
    title: 'Consectetur Adipiscing Elit',
    company: 'Verdant Systems',
    location: 'Remote',
    salary: '$100k – $140k',
    salaryMin: 100,
    type: 'Remote',
    category: 'Engineering',
    experience: 'Mid',
    posted: '1 day ago',
    logo: 'fas fa-leaf',
    logoBg: 'bg-emerald-50',
    logoColor: 'text-emerald-600',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Consectetur', 'Adipiscing', 'Tempor', 'Labore', 'Magna']
  },
  {
    id: 3,
    title: 'Sed Do Eiusmod Tempor',
    company: 'Lumia Studio',
    location: 'New York, NY',
    salary: '$90k – $125k',
    salaryMin: 90,
    type: 'Full-time',
    category: 'Design',
    experience: 'Mid',
    posted: '3 days ago',
    logo: 'fas fa-gem',
    logoBg: 'bg-violet-50',
    logoColor: 'text-violet-600',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Eiusmod', 'Tempor', 'Incididunt', 'Labore', 'Dolore']
  },
  {
    id: 4,
    title: 'Ut Enim Ad Minim Veniam',
    company: 'Voltix Media',
    location: 'Austin, TX',
    salary: '$75k – $105k',
    salaryMin: 75,
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    posted: '5 hours ago',
    logo: 'fas fa-bolt',
    logoBg: 'bg-cyan-50',
    logoColor: 'text-cyan-600',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Veniam', 'Nostrud', 'Exercitation', 'Ullamco', 'Laboris']
  },
  {
    id: 5,
    title: 'Quis Nostrud Exercitation',
    company: 'Solaris Tech',
    location: 'Remote',
    salary: '$55k – $75k',
    salaryMin: 55,
    type: 'Remote',
    category: 'Engineering',
    experience: 'Entry',
    posted: '6 hours ago',
    logo: 'fas fa-sun',
    logoBg: 'bg-amber-50',
    logoColor: 'text-amber-600',
    description: 'Excepteur sint occaecat cupidatat non proident. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Nostrud', 'Exercitation', 'Ullamco', 'Laboris', 'Nisi']
  },
  {
    id: 6,
    title: 'Duis Aute Irure Dolor',
    company: 'Hydra Analytics',
    location: 'Seattle, WA',
    salary: '$130k – $170k',
    salaryMin: 130,
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    posted: '1 week ago',
    logo: 'fas fa-water',
    logoBg: 'bg-sky-50',
    logoColor: 'text-sky-600',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Irure', 'Dolor', 'Reprehenderit', 'Voluptate', 'Velit']
  },
  {
    id: 7,
    title: 'Excepteur Sint Occaecat',
    company: 'Lumia Studio',
    location: 'Remote',
    salary: '$85k – $115k',
    salaryMin: 85,
    type: 'Contract',
    category: 'Design',
    experience: 'Mid',
    posted: '4 days ago',
    logo: 'fas fa-gem',
    logoBg: 'bg-violet-50',
    logoColor: 'text-violet-600',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Occaecat', 'Cupidatat', 'Proident', 'Culpa', 'Officia']
  },
  {
    id: 8,
    title: 'Nemo Enim Ipsam Voluptatem',
    company: 'Voltix Media',
    location: 'Chicago, IL',
    salary: '$50k – $70k',
    salaryMin: 50,
    type: 'Full-time',
    category: 'Sales',
    experience: 'Entry',
    posted: '2 days ago',
    logo: 'fas fa-bolt',
    logoBg: 'bg-cyan-50',
    logoColor: 'text-cyan-600',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.',
    requirements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    skills: ['Voluptatem', 'Aspernatur', 'Magni', 'Dolores', 'Ratione']
  }
];

const jobList = document.getElementById('job-list');
const searchInline = document.getElementById('search-inline');
const searchMobile = document.getElementById('search-mobile');
const searchInfo = document.getElementById('search-info');
const searchTermDisplay = document.getElementById('search-term-display');
const searchCount = document.getElementById('search-count');
const noSearchResults = document.getElementById('no-search-results');
const heroSearch = document.getElementById('hero-search');
const heroLocation = document.getElementById('hero-location');

let activeCategory = 'All';
let activeTypes = ['Full-time'];
let activeExperience = 'all';
let activeSalary = 'all';
let searchTerm = '';

function getCategoryColor(cat) {
  const map = {
    Engineering: 'bg-teal-50 text-teal-700',
    Design: 'bg-violet-50 text-violet-700',
    Marketing: 'bg-cyan-50 text-cyan-700',
    Product: 'bg-emerald-50 text-emerald-700',
    Sales: 'bg-amber-50 text-amber-700'
  };
  return map[cat] || 'bg-gray-100 text-gray-700';
}

function renderJob(job) {
  return `
    <article class="job-card bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 cursor-pointer fade-in"
      data-id="${job.id}">
      <div class="flex items-start gap-4">
        <div class="w-14 h-14 rounded-xl ${job.logoBg} flex items-center justify-center ${job.logoColor} flex-shrink-0">
          <i class="${job.logo} text-xl"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div class="min-w-0">
              <h3 class="text-base sm:text-lg font-bold text-gray-900 hover:text-teal-600 transition">
                ${job.title}
              </h3>
              <p class="text-sm text-gray-500 mt-0.5">
                <i class="fas fa-building text-xs mr-1.5"></i>${job.company}
              </p>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-lg ${getCategoryColor(job.category)} flex-shrink-0">
              ${job.category}
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-500">
            <span><i class="fas fa-map-marker-alt mr-1.5"></i>${job.location}</span>
            <span><i class="fas fa-money-bill-wave mr-1.5"></i>${job.salary}</span>
            <span><i class="far fa-clock mr-1.5"></i>${job.posted}</span>
          </div>

          <div class="flex flex-wrap gap-2 mt-3.5">
            <span class="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700">
              <i class="fas fa-briefcase text-[10px] mr-1.5"></i>${job.type}
            </span>
            <span class="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">
              <i class="fas fa-signal text-[10px] mr-1.5"></i>${job.experience}
            </span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function applyFilters() {
  let filtered = [...jobs];

  if (activeCategory !== 'All') {
    filtered = filtered.filter(j => j.category === activeCategory);
  }

  if (activeTypes.length > 0 && !activeTypes.includes('all')) {
    filtered = filtered.filter(j => activeTypes.includes(j.type));
  }

  if (activeExperience !== 'all') {
    filtered = filtered.filter(j => j.experience === activeExperience);
  }

  if (activeSalary !== 'all') {
    const [min, max] = activeSalary.split('-').map(Number);
    filtered = filtered.filter(j => j.salaryMin >= min && j.salaryMin <= max);
  }

  if (searchTerm.trim()) {
    const term = searchTerm.trim().toLowerCase();
    filtered = filtered.filter(j =>
      j.title.toLowerCase().includes(term) ||
      j.company.toLowerCase().includes(term) ||
      j.location.toLowerCase().includes(term) ||
      j.category.toLowerCase().includes(term) ||
      j.skills.some(s => s.toLowerCase().includes(term))
    );
  }

  return filtered;
}

function render() {
  const filtered = applyFilters();

  if (searchTerm.trim()) {
    searchInfo.classList.remove('hidden');
    searchTermDisplay.textContent = searchTerm;
    searchCount.textContent = filtered.length;
  } else {
    searchInfo.classList.add('hidden');
  }

  if (filtered.length === 0) {
    jobList.innerHTML = '';
    noSearchResults.classList.remove('hidden');
    return;
  }

  noSearchResults.classList.add('hidden');
  jobList.innerHTML = filtered.map(renderJob).join('');

  document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', () => openJobModal(parseInt(card.dataset.id)));
  });
}

const jobModal = document.getElementById('job-modal');

function openJobModal(id) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  document.getElementById('job-modal-type').textContent = job.type;
  document.getElementById('job-modal-title').textContent = job.title;
  document.getElementById('job-modal-company').textContent = job.company;
  document.getElementById('job-modal-location').textContent = job.location;
  document.getElementById('job-modal-salary').textContent = job.salary;
  document.getElementById('job-modal-exp').innerHTML = `<i class="fas fa-briefcase text-[10px]"></i><span>${job.experience} Level</span>`;
  document.getElementById('job-modal-posted').innerHTML = `<i class="far fa-clock text-[10px]"></i><span>Posted ${job.posted}</span>`;
  document.getElementById('job-modal-description').textContent = job.description;

  document.getElementById('job-modal-requirements').innerHTML = job.requirements
    .map(r => `<li class="flex items-start space-x-2"><i class="fas fa-check-circle text-teal-500 text-xs mt-1"></i><span>${r}</span></li>`)
    .join('');

  document.getElementById('job-modal-skills').innerHTML = job.skills
    .map(s => `<span class="text-xs font-medium px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700">${s}</span>`)
    .join('');

  jobModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  jobModal.querySelector('.relative.h-full').scrollTop = 0;
}

function closeJobModal() {
  jobModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

document.getElementById('close-job').addEventListener('click', closeJobModal);
document.getElementById('close-job-bottom').addEventListener('click', closeJobModal);
document.getElementById('job-backdrop').addEventListener('click', closeJobModal);
document.getElementById('job-save').addEventListener('click', function () {
  const icon = this.querySelector('i');
  icon.classList.toggle('far');
  icon.classList.toggle('fas');
  icon.classList.toggle('text-teal-600');
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-teal-600', 'text-white');
      b.classList.add('bg-gray-100', 'text-gray-700');
    });
    btn.classList.add('active', 'bg-teal-600', 'text-white');
    btn.classList.remove('bg-gray-100', 'text-gray-700');
    activeCategory = btn.dataset.cat;
    render();
  });
});

document.querySelectorAll('.type-filter').forEach(cb => {
  cb.addEventListener('change', () => {
    activeTypes = Array.from(document.querySelectorAll('.type-filter:checked')).map(c => c.value);
    render();
  });
});

document.getElementById('exp-filter').addEventListener('change', e => {
  activeExperience = e.target.value;
  render();
});

document.getElementById('salary-filter').addEventListener('change', e => {
  activeSalary = e.target.value;
  render();
});

document.getElementById('reset-filters').addEventListener('click', () => {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active', 'bg-teal-600', 'text-white');
    b.classList.add('bg-gray-100', 'text-gray-700');
    if (b.dataset.cat === 'All') {
      b.classList.add('active', 'bg-teal-600', 'text-white');
      b.classList.remove('bg-gray-100', 'text-gray-700');
    }
  });
  activeCategory = 'All';

  document.querySelectorAll('.type-filter').forEach(c => c.checked = c.value === 'Full-time');
  activeTypes = ['Full-time'];

  document.getElementById('exp-filter').value = 'all';
  activeExperience = 'all';

  document.getElementById('salary-filter').value = 'all';
  activeSalary = 'all';

  searchInline.value = '';
  searchMobile.value = '';
  heroSearch.value = '';
  heroLocation.value = '';
  searchTerm = '';

  render();
});

function updateSearch(term) {
  searchTerm = term;
  render();
}

searchInline.addEventListener('input', e => {
  searchMobile.value = e.target.value;
  updateSearch(e.target.value);
});

searchMobile.addEventListener('input', e => {
  searchInline.value = e.target.value;
  updateSearch(e.target.value);
});

document.getElementById('clear-search').addEventListener('click', () => {
  searchInline.value = '';
  searchMobile.value = '';
  heroSearch.value = '';
  updateSearch('');
});

document.getElementById('hero-search-btn').addEventListener('click', () => {
  const title = heroSearch.value.trim();
  const loc = heroLocation.value.trim();
  const combined = [title, loc].filter(Boolean).join(' ');
  searchInline.value = combined;
  searchMobile.value = combined;
  updateSearch(combined);
});

heroSearch.addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('hero-search-btn').click();
});

heroLocation.addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('hero-search-btn').click();
});

document.querySelectorAll('.popular-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const value = tag.textContent.trim();
    heroSearch.value = value;
    searchInline.value = value;
    searchMobile.value = value;
    updateSearch(value);
    document.getElementById('job-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.getElementById('search-toggle').addEventListener('click', () => {
  const ms = document.getElementById('mobile-search');
  ms.classList.toggle('hidden');
  if (!ms.classList.contains('hidden')) {
    document.getElementById('search-mobile').focus();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !jobModal.classList.contains('hidden')) {
    closeJobModal();
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (window.innerWidth >= 768) {
      searchInline.focus();
    } else {
      document.getElementById('mobile-search').classList.remove('hidden');
      searchMobile.focus();
    }
  }
});

render();