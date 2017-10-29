var baseUrl = "http://designed.mit.edu/gallery/";
import { Navigation } from "./nav.jsx";

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var TeamContent = React.createClass({
    render: function () {
        console.log('hey what is htis', this.props.project.deliverables);
        var project = this.props.project;
        console.log('project', project);
        return (
            <div className="project-content">
                <h2 className="fixed-topbar">{project.projName}</h2>
                <h3 className="team">Team</h3>
                <p>{project.projTeam}</p>
                <p></p>
                <div className="additional-links">
                    <a href={project.projCode}>Team Code of Ethics</a>
                </div>
                <h3 className="3-ideas">3 Ideas</h3>

                {this.renderIdeaPosters()}

                <h3 className="sketch-models">Sketch Models</h3>
                {this.renderTeamSections("sketch models", "sketch")}

                <h3 className="mock-ups">Mock-ups</h3>
                {this.renderTeamSections("mock-up", "mockup")}

                <h3 className="assembly">Assembly Review</h3>
                {this.renderAssemblySection()}

                <h3 className="technical-review">Technical Review</h3>
                {this.renderTechReviewSection()}

                <h3 className="final">Final Presentation</h3>
                {this.renderFinalSection()}
            </div>
        );
    },

    renderIdeaPosters: function (sectionLetter) {
        var ideas = this.props.project.deliverables.ideas;

        var project = this.props.project;
        var year = this.props.year;

        var ideasPics = [];
        var prevSection = "";
        var sections = [];
        for (var s in ideas) {
            if (prevSection.charAt(0) !== s.charAt(0)) {
                if (ideasPics.length > 0) {
                    sections.push(<p className="posters">{ideasPics}</p>);
                    ideasPics = [];
                }
                sections.push(
                    <h4 key={`ideas-header-${s.charAt(0)}`}>
                        <span className="section-tag">Section&nbsp;
                        <em>{s.charAt(0)}</em>
                        </span>
                    </h4>,
                );
                prevSection = s;
            }
            ideasPics.push(
                <img className="poster" src={baseUrl + `data/${year}/ideas/${project.projColor}${s}.jpg`} key={`idea-${s}`} />
            );
        }
        sections.push(<p className="posters">{ideasPics}</p>);
        return sections;
    },


    renderTeamSections: function (sectionDisplayName, sectionKey) {
        var project = this.props.project;
        var year = this.props.year;
        var sectionTeams = project.deliverables[sectionKey];

        var elements = [];
        for (var s in sectionTeams) {
            elements.push(
                <h4 key={`${sectionKey}-${s}-header`}>
                    <span className="section-tag">{sectionDisplayName}
                        <em> {s}</em>
                    </span> {sectionTeams[s].name}</h4>,
                <div className="milestone-container" key={`${sectionKey}-${s}`}>
                    <div className="milestone-media">
                        <iframe src={`https://player.vimeo.com/video/${sectionTeams[s].vimeoId}`} width="400" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen
                            allowfullscreen></iframe>
                        <div className="milestone-images">
                            <a href={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_1.jpg`}><img src={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_1_sm.jpg`} /></a>
                            <a href={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_2.jpg`}><img src={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_2_sm.jpg`} /></a>
                        </div>
                    </div>
                    <div className="additional-links">
                        <div><a href={baseUrl + `data/${year}/${sectionKey}/slides/${project.projColor}${s}.pdf`}>View Presentation Slides</a></div>
                        <div><a href={baseUrl + `data/${year}/${sectionKey}/movies/${project.projColor}${s}`} download>Download Original Video</a></div>
                    </div>
                </div>,
            );
        }

        return elements;
    },

    renderAssemblySection: function () {
        var project = this.props.project;
        var year = this.props.year;
        var assembly = project.deliverables.assembly;

        return [
            <div className="milestone-container" key="assembly-section">
                <div className="milestone-media">
                    <div className="milestone-images">
                        <a href={baseUrl + `data/${year}/assembly/${project.projColor}Assembly.jpg`}><img className="assembly-image" src={baseUrl + `data/${year}/assembly/${project.projColor}Assembly.jpg`} /></a>
                    </div>
                </div>
                <div className="additional-links">
                    <div><a href={baseUrl + `data/${year}/assembly/movies/${project.projColor}`} download>Download Original Video</a></div>
                    <div><a href={baseUrl + `data/${year}/assembly/${project.projColor}Contract.pdf`}>View Product Contract</a></div>
                </div>
            </div>,
        ];
    },

    renderTechReviewSection: function () {
        var project = this.props.project;
        var year = this.props.year;
        var section = project.deliverables.tech;

        return [
            <div className="milestone-container" key="assembly-section">
                <div className="milestone-media">
                    <iframe src={`https://player.vimeo.com/video/${section.vimeoId}`} width="400" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen
                        allowfullscreen></iframe>
                    <div className="milestone-images">
                        <a href={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}1.jpg`}><img src={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}1_sm.jpg`} /></a>
                        <a href={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}2.jpg`}><img src={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}2_sm.jpg`} /></a>
                    </div>
                </div>
                <div className="additional-links">
                    <div><a href={baseUrl + `data/${year}/tech/movies/${project.projColor}`} download>Download Original Video</a></div>
                </div>
            </div>,
        ];
    },

    renderFinalSection: function () {
        var project = this.props.project;
        var year = this.props.year;
        var section = project.deliverables.final;

        return [
            <div className="milestone-container" key="assembly-section">
                <div className="milestone-media">
                    <iframe src={`https://player.vimeo.com/video/${section.vimeoId}`} width="400" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen
                        allowfullscreen></iframe>
                    <div className="milestone-images">
                        <a href={baseUrl + `data/${year}/final/photos/original/${project.projColor}1.jpg`}><img src={baseUrl + `data/${year}/final/photos/small/${project.projColor}1.jpg`} /></a>
                        <a href={baseUrl + `data/${year}/final/photos/original/${project.projColor}2.jpg`}><img src={baseUrl + `data/${year}/final/photos/small/${project.projColor}2.jpg`} /></a>
                    </div>
                </div>
                <div className="additional-links">
                    <div><a href={baseUrl + `data/${year}/final/slides/${project.projColor}.pdf`}>View Presentation Slides</a></div>
                    <div><a href={baseUrl + `data/${year}/final/extras/${project.projColor}_brochure.pdf`}>View Product Brochure</a></div>
                    <div><a href={baseUrl + `data/${year}/tech/movies/${project.projColor}`} download>Download Original Video</a></div>
                </div>
            </div>,
        ];
    }
});

var sections = {
    'team': 1,
    '3-ideas': 2,
    'sketch-models': 3,
    'mock-ups': 4
}

var scrollBreaks = [];

function updateNavigationBar() {
    if ($(window).scrollTop() < 10) {
        $('.navigation').removeClass('condensed');
        $('h1').removeClass('condensed');
        $('h2').removeClass('condensed');
    } else {
        $('.navigation').addClass('condensed');
        $('h1').addClass('condensed');
        $('h2').addClass('condensed');
    }
}

function updateSidemenuHighlight() {
    var closestSection = 0;
    var section = 'team';
    var scrollTop = $(window).scrollTop();
    var offset = 200
    for (var i in sections) {
        if (sections[i] < scrollTop + offset && closestSection < sections[i]) {
            closestSection = sections[i];
            section = i;
        }
    }
    $('h3').each(function () {
        $('li').removeClass('sidemenu-highlight');
    })
    $('li.m-' + section).addClass('sidemenu-highlight');

    window.location.hash = section;

}

function scrollToSection(section) {
    $(window).scrollTo($('h3.' + section), {
        offset: -50,
        duration: 200
    })
    updateSidemenuHighlight();
}

function buildSidemenu() {
    $('h3').each(function () {
        sections[$(this).attr('class')] = $(this).offset().top;
    })
    $('.project-sidemenu').on('click', 'li', function () {
        scrollToSection($(this).data('section'));
    })
}

var locationHash;

$(function () {
    function parseQuery(qstr) {
        if (qstr === undefined || qstr.length === 0) {
            return {};
        }

        var query = {};
        var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }

    var urlLocation = parseQuery(window.location.search);
    if (urlLocation.year != null
        && DATA[urlLocation.year] !== undefined
        && urlLocation.team != null
        && DATA[urlLocation.year].projects !== undefined) {

        var teamProject = DATA[urlLocation.year].projects[urlLocation.team]

        if (teamProject !== undefined) {

            ReactDOM.render(
                <TeamContent project={teamProject} year={urlLocation.year} />,
                document.getElementById('project-content')
            );

            // TODO: Move

            ReactDOM.render(
                <Navigation />,
                document.getElementById('navigation')
            );

            // TODO: Figure out Clipboardy
            new Clipboard('.btn');

            // handle scrolling after the DOM has rendered our elements
            $(window).scroll(function () {
                updateSidemenuHighlight();
                updateNavigationBar();
            });

            updateNavigationBar();
            buildSidemenu();

            locationHash = window.location.hash;
            console.log(locationHash)
            if (locationHash !== undefined && locationHash !== "") {
                if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                }
                console.log(locationHash);
                scrollToSection(locationHash.replace(/[^\-A-Za-z0-9]/g, ''));
            }
        } else {
            // handle unknown case
        }
    } else {
        // handle bad query param case
    }
});
