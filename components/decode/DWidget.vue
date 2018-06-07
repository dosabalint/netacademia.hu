<template>
  <div class="widget" :class="widgetClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "widget",
  props: {
    type: {
      type: String,
      required: true,
      validator(val) {
        return (
          [
            "contact",
            "search",
            "categories",
            "archives",
            "pages",
            "metadata",
            "tags",
            "newsletter",
            "recent-posts",
            "latest-posts",
            "recent-comments",
            "calendar",
            "social"
          ].indexOf(val) !== -1
        );
      }
    }
  },
  computed: {
    widgetClass() {
      return `widget-${this.type}`;
    }
  }
};
</script>

<style lang="scss">
.widget {
  margin-bottom: 60px;

  & > *:last-child {
    margin-bottom: 0;
  }
}

.widget-title {
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 600;
  text-transform: uppercase;
}

/* WIDGET TEXT */
.widget-text {
  & div > *:last-child {
    margin-bottom: 0;
  }
}

.copyright {
  margin-top: 3px;
  font-size: 13px;

  & img {
    margin-right: 10px;
  }
}

.widget-contact {
  ul {
    margin-bottom: 0;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
    color: #838383;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  ul li i {
    margin-right: 15px;
  }

  ul li a {
    color: #838383;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  ul li a:hover {
    color: #00f0d1;
    text-decoration: none;
  }

  ul li.email i {
    position: relative;
    top: 3px;
    font-size: 18px;
  }
}

.widget-search {
  form {
    position: relative;
  }

  #s {
    position: relative;
    width: 100%;
    padding: 10px 45px 10px 0;
    border: none;
    border-bottom: 2px solid #e1e1e1;
    margin-bottom: 0;
  }

  input[type="submit"] {
    position: absolute;
    top: 0;
    right: 0;
    width: 41px;
    height: 41px;
    padding: 0;
    border: none;
    background: url(/decode/search-3.png) no-repeat center center;
  }

  label {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 0;
    font-size: 14px;
    font-style: italic;
    pointer-events: none;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  input ~ span {
    position: absolute;
    z-index: 20;
    bottom: 0;
    left: 50%;
    display: block;
    width: 0;
    height: 2px;
    background: #00f0d1;
    background: -webkit-linear-gradient(90deg, #00f0d1, #a966ee);
    background: -ms-linear-gradient(90deg, #00f0d1, #a966ee);
    background: linear-gradient(90deg, #00f0d1, #a966ee);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  input:focus ~ label,
  textarea:focus ~ label,
  input:valid ~ label,
  textarea:valid ~ label {
    top: -15px;
    font-size: 12px;
    font-style: normal;
  }

  input:focus ~ span {
    width: 100%;
  }
}

.widget-categories {
  ul {
    margin-bottom: 0;
    list-style: none;
  }

  ul li {
    margin-bottom: 12px;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  ul li a {
    color: #838383;
    font-size: 14px;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  ul li a:hover {
    color: #00f0d1;
    text-decoration: none;
  }
}

/* WIDGET CATEGORIES DROPDOWN */
.widget-categories-dropdown {
}

/* WIDGET ARCHIVES */
.widget-archives {
  ul {
    margin-bottom: 0;
    list-style: none;
  }

  ul li {
    margin-bottom: 12px;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  ul li a {
    color: #838383;
    font-size: 14px;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  ul li a:hover {
    color: #00f0d1;
    text-decoration: none;
  }
}

/* WIDGET ARCHIVES DROPDOWN */
.widget-archives-dropdown {
}

/* WIDGET PAGES */
.widget-pages {
}

.widget-pages ul {
  margin-bottom: 0;
  list-style: none;
}

.widget-pages ul li {
  margin-bottom: 12px;
}

.widget-pages ul li:last-child {
  margin-bottom: 0;
}

.widget-pages ul li a {
  color: #838383;
  font-size: 14px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-pages ul li a:hover {
  color: #00f0d1;
  text-decoration: none;
}

/* WIDGET METADATA */
.widget-metadata {
}

.widget-metadata ul {
  margin-bottom: 0;
  list-style: none;
}

.widget-metadata ul li {
  margin-bottom: 12px;
}

.widget-metadata ul li:last-child {
  margin-bottom: 0;
}

.widget-metadata ul li a {
  color: #838383;
  font-size: 14px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-metadata ul li a:hover {
  color: #00f0d1;
  text-decoration: none;
}

/* WIDGET TAGS */
.widget-tags {
}

.widget-tags a {
}

.widget-tags .btn {
  margin-bottom: 10px;
  margin-right: 5px;
}

.widget-tags .btn:last-child {
  margin-right: 0;
}

/* WIDGET NEWSLETTER */
.widget-newsletter {
}

.widget-newsletter div,
.widget-newsletter form {
  position: relative;
}

.widget-newsletter input[type="text"] {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #e1e1e1;
}

.widget-newsletter label {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 0;
  font-size: 14px;
  font-style: italic;
  pointer-events: none;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-newsletter input ~ span {
  position: absolute;
  z-index: 20;
  bottom: 0;
  left: 50%;
  display: block;
  width: 0;
  height: 2px;
  background: #00f0d1;
  background: -webkit-linear-gradient(90deg, #00f0d1, #a966ee);
  background: -ms-linear-gradient(90deg, #00f0d1, #a966ee);
  background: linear-gradient(90deg, #00f0d1, #a966ee);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-newsletter input:focus ~ label,
.widget-newsletter textarea:focus ~ label,
.widget-newsletter input:valid ~ label,
.widget-newsletter textarea:valid ~ label {
  top: -20px;
  font-size: 12px;
  font-style: normal;
}

.widget-newsletter input:focus ~ span {
  width: 100%;
}

.widget-newsletter button[type="submit"] {
  margin-top: 20px;
}

/* WIDGET RECENT POSTS */
.widget-recent-posts {
}

.widget-recent-posts ul {
  list-style: none;
  margin-bottom: 0;
}

.widget-recent-posts ul li {
  margin-bottom: 10px;
}

.widget-recent-posts ul li:last-child {
  margin-bottom: 0;
}

.widget-recent-posts ul li img {
  float: left;
  margin: 5px 20px 10px 0;
}

.widget-recent-posts ul li .post-title {
  color: #252525;
  font-size: 14px;
  font-weight: 600;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-recent-posts ul li .post-details {
  font-size: 13px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-recent-posts ul li .post-details a {
  color: #838383;
  text-decoration: none;
}

.widget-recent-posts ul li .post-details a:after {
  position: relative;
  top: -1px;
  margin-left: 5px;
  color: #838383;
  content: "/";
}

.widget-recent-posts ul li .post-details a:last-child:after {
  display: none;
}

.widget-recent-posts ul li .post-details a:hover {
  color: #00f0d1;
}

.widget-recent-posts ul li .post-details p:last-of-type {
  margin-bottom: 0;
}

.widget-recent-posts ul li .post-title:hover {
  color: #00f0d1;
  text-decoration: none;
}

.widget-recent-posts ul li:after {
  display: table;
  clear: both;
  content: "";
}

@media (min-width: 768px) and (max-width: 991px) {
  .widget-recent-posts ul li img {
    display: none;
  }
}

/* WIDGET LATEST POSTS */
.widget-latest-posts {
}

.widget-latest-posts ul {
  list-style: none;
  margin-bottom: 0;
}

.widget-latest-posts ul li {
  margin-bottom: 30px;
}

.widget-latest-posts ul li:last-child {
  margin-bottom: 0;
}

.widget-latest-posts ul li .post-thumbnail {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
}

.widget-latest-posts ul li .post-title {
  color: #0c0c0c;
  font-size: 24px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-latest-posts ul li .post-details a {
  display: inline-block;
  color: #c2c2c2;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  text-decoration: none;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-latest-posts ul li .post-details a.post-category {
  color: #252525;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.widget-latest-posts ul li .post-details a:last-of-type {
  margin-bottom: 30px;
}

.widget-latest-posts ul li .post-details a:hover {
  color: #00f0d1;
}

.widget-latest-posts ul li .post-details p:last-of-type {
  margin-bottom: 0;
}

.widget-latest-posts ul li .post-title:hover {
  color: #00f0d1;
  text-decoration: none;
}

.widget-latest-posts ul li:after {
  display: table;
  clear: both;
  content: "";
}

@media (max-width: 1199px) {
  .widget-latest-posts ul li .post-thumbnail {
    width: 25%;
  }
}

@media (max-width: 767px) {
  .widget-latest-posts ul li .post-thumbnail {
    float: none;
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    display: block;
  }
}

/* WIDGET RECENT COMMENTS */
.widget-recent-comments {
}

.widget-recent-comments ul {
  margin-bottom: 0;
  list-style: none;
}

.widget-recent-comments ul li {
  margin-bottom: 10px;
  color: #838383;
  font-size: 14px;
}

.widget-recent-comments ul li:last-child {
  margin-bottom: 0;
}

.widget-recent-comments ul li a:first-child {
  color: #838383;
  text-decoration: none;
}

.widget-recent-comments ul li a:last-of-type {
  color: #252525;
  text-decoration: none;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.widget-recent-comments ul li a:first-child:hover,
.widget-recent-comments ul li a:last-of-type:hover {
  color: #00f0d1;
}

.widget-recent-comments ul li span {
  color: #838383;
}

.widget-recent-comments ul li span:before {
  position: relative;
  top: -1px;
  margin: 0 2px;
  content: "/";
}

/* WIDGET CALENDAR */
.widget-calendar {
}

.widget-calendar table {
  width: 100%;
  text-align: center;
}

.widget-calendar table th,
.widget-calendar table td {
  padding: 5px;
  border-top: 1px solid #e1e1e1;
  border-left: 1px solid #e1e1e1;
  text-align: center;
}

.widget-calendar table th:last-child,
.widget-calendar table td:last-child {
  border-right: 1px solid #e1e1e1;
}

.widget-calendar table tr:last-child td {
  border-bottom: 1px solid #e1e1e1;
}

.widget-calendar table tfoot td,
.widget-calendar table tfoot td:last-child,
.widget-calendar table tfoot tr:last-child td {
  border: none;
}

.widget-calendar table td#today {
  background-color: #00f0d1;
  color: #fff;
}

/* WIDGET FLICKR */
.flickr-photos {
  padding-top: 8px;
  margin: -5px;
}

.flickr_badge_image {
  position: relative;
  float: left;
  padding: 5px;
}

.flickr_badge_image img {
  width: 90px;
  height: auto;
}

.flickr-photos:after {
  display: table;
  content: " ";
  clear: both;
}

@media (min-width: 1200px) {
  .flickr_badge_image img {
    width: 110px;
  }
}

/* WIDGET INSTAGRAM */
.widget-instagram {
}

#instafeed {
  margin: -5px;
}

#instafeed a {
  float: left;
  display: block;
  width: 72px;
  padding: 5px;
}

#instafeed a img {
  display: block;
  width: 100%;
  height: auto;
}

#instafeed:after {
  visibility: hidden;
  display: block;
  height: 0;
  font-size: 0;
  content: " ";
  clear: both;
}

@media (min-width: 1200px) {
  #instafeed a {
    width: 90px;
  }
}

/* WIDGET TWITTER */
.widget-twitter {
}

.tweets-list ul {
  margin-bottom: 0;
  list-style: none;
}

.tweets-list ul li {
  margin-bottom: 20px;
}

.tweets-list ul li > *:last-child {
  margin-bottom: 0;
}

.tweets-list ul li:last-child {
  margin-bottom: 0;
}

/* WIDGET SOCIAL */
.widget-social {
}

.float-left + .widget-social {
  margin-left: 10px;
}

.widget-social .social-media.rounded {
  margin-bottom: 0;
}

.widget-social .social-media.rounded a:nth-child(1) {
  background-color: #00f0d1;
}

.widget-social .social-media.rounded a:nth-child(2) {
  background-color: #1caccc;
}

.widget-social .social-media.rounded a:nth-child(3) {
  background-color: #3b73c9;
}

.widget-social .social-media.rounded a:nth-child(4) {
  background-color: #6458c8;
}

.widget-social .social-media.rounded a:nth-child(5) {
  background-color: #9351c9;
}

.widget-social .social-media.rounded a:nth-child(6) {
  background-color: #bf4fcb;
}

@media (max-width: 365px) {
  .float-left + .widget-social {
    margin-left: 0;
  }
}

/* DARK SECTIONS */
.full-section.dark {
  .widget-recent-posts ul li .post-title,
  .widget-recent-posts ul li .post-details a,
  .widget-latest-posts ul li .post-title,
  .widget-latest-posts ul li .post-details a.post-category,
  .widget-latest-posts ul li .post-details a:last-of-type,
  .widget-recent-comments ul li,
  .widget-recent-comments ul li a {
    color: inherit;
  }

  .widget-recent-posts ul li .post-title:hover,
  .widget-recent-posts ul li .post-details a:hover,
  .widget-latest-posts ul li .post-title:hover,
  .widget-latest-posts ul li .post-details a.post-category:hover,
  .widget-latest-posts ul li .post-details a:last-of-type:hover,
  .widget-recent-comments ul li a:hover {
    color: #00f0d1;
  }
}
</style>
