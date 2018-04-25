import axios from 'axios';
import inflight from 'inflight';
import TimeAgo from './timeAgo';

class ESStore {
  constructor(poll_interval = 60) {
    this.cache = {};
    setInterval(function(store) { store.refresh(); }, poll_interval * 1000, this);
  }

  remove(url) {
    delete this.cache[url];
  }

  get(url, callback) {
    if (this.cache.hasOwnProperty(url)) {
      callback.call(null, this.cache[url]);
      return true;
    }

    callback = inflight(url, callback);
    if (!callback) {
      return;
    }

    axios.get(url).then(function(response) {
      this.cache[url] = response;
      callback.call(null, this.cache[url]);
    }.bind(this));
    return false;
  }

  refresh() {
    this.cache = {};
  }
}

export default ESStore;
