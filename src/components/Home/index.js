import React from "react";
import { connect } from 'react-redux';
import {getPosts, handlePageNumber, isLoading } from '../../store/actions.js'
import Thumbnail from '../General/Thumbnail'
import Header from '../General/Header'
import HomeHeader from '../General/HomeHeader'
import ErrorModal from '../Ul/ErrorModal'
import PostNav from '../General/PostNav'
import Spinner from '../Ul/Spinner'
import ScrollUpBtn from '../Ul/ScrollUpBtn'
import './../../styles/index.scss'
import './../../styles/gallery.scss'
import './../../styles/general.scss'
import './../../styles/ul.scss'
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  AutoSizer,
  InfiniteLoader,
  WindowScroller
} from "react-virtualized";

//******************************* */
const URL = `https://api.imgur.com/3/gallery`
const GAP_TO_ADD_MORE_POSTS = 5
const CARD = {
  WIDTH: 240,
  HEIGHT: 240
};

class MasonryGallery extends React.Component {
  state = {
    columnCount: 0
  }

  getCollections = () => {
    const {
        section_view, 
        sort,
        window,
        show_viral,
        album_previews,
        show_mature,
        page
    } = this.props

    const url = `${URL}/${section_view}/${sort}/${window}/${page}?showViral={${show_viral}}&mature=${show_mature}&album_previews=${album_previews}`

    this.props.getPosts(url)
  };

  componentDidMount() {
    const {
        section_view, 
        sort,
        window,
        show_viral,
        album_previews,
        show_mature,
        page
    } = this.props

    const url = `${URL}/${section_view}/${sort}/${window}/${page}?showViral={${show_viral}}&mature=${show_mature}&album_previews=${album_previews}`

    if(page === 0){
     this.props.getPosts(url); 
    }

    if(this._masonry.props.width !== 0){
      const columns = this.getColumnCount()
      this.setState({columnCount: columns})
    }
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
        posts,
        section_view,
        sort,
        window,
        page,
        show_viral,
        show_mature,
        album_previews
    } =  this.props
    if (
        section_view !== nextProps.section_view || 
        sort !== nextProps.sort || 
        window !== nextProps.window ||
        show_viral !== nextProps.show_viral
        ) {
          const url = `${URL}/${section_view}/${sort}/${window}/0?showViral={${show_viral}}&mature=${show_mature}&album_previews=${album_previews}`
          this.props.getPosts(url);
          return true;
    }
    
    if(page !== nextProps.page || 
      posts.length !== nextProps.posts ||
      posts?.[0]?.id !== nextProps?.posts?.[0].id
      ){
          return true
    }

    return false;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page < this.props.page && this.props.page > 0){
      
      this.loadMoreRows()
    }
  }


  _cache = new CellMeasurerCache({
    fixedHeight: true,
    fixedWidth: true,
    defaultHeight:CARD.HEIGHT
  });

  _config = {
    columnWidth:CARD.WIDTH,
    gutterSize: 16,
    overscanByPixels: CARD.HEIGHT
  };

  getPositionerConfig = width => {
    const { gutterSize } = this._config;
    const columnCount = this.getColumnCount(width);

    let widthCol = columnCount === 1 ? 290 : CARD.WIDTH

    return {
      columnCount,
      columnWidth: widthCol,
      spacer: gutterSize
    };
  };

  resetCellPositioner = width => {
    const config = this.getPositionerConfig(width);
    this._cellPositioner.reset(config);
  };

  getColumnCount = width => {
    const { columnWidth, gutterSize } = this._config;
    const columnCount = Math.floor(width / (columnWidth + gutterSize));
    return columnCount;
  };

  initCellPositioner(width) {
    if (typeof this._cellPositioner === "undefined") {
      const config = this.getPositionerConfig(width);
      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        ...config
      });
    }
  }

  onResize = ({ width }) => {
    this.resetCellPositioner(width);
    this._masonry.recomputeCellPositions();
  };

  isRowLoaded = ({ index }) => {
    if((this.props.posts?.length - index) <= GAP_TO_ADD_MORE_POSTS){
        this.props.handlePageNumber(this.props.page + 1)
    }
    return this.props.posts[index];
  };

loadMoreRows () {
  const {
    section_view, 
    sort,
    window,
    show_viral,
    album_previews,
    show_mature,
    page
} = this.props

  const url = `${URL}/${section_view}/${sort}/${window}/${page}?showViral={${show_viral}}&mature=${show_mature}&album_previews=${album_previews}`
  this.props.getPosts(url);
  
}


cellRenderer = config => {
    const { index, key, parent, style } = config;
    const item = this.props.posts[index];

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div
          style={{
            ...style,
            height:  CARD.HEIGHT,
            width: this.state.columnCount === 1 ? 290 : CARD.WIDTH,
            marginBottom: '2rem'
          }}
        >
        {item ?  <Thumbnail 
                  height={CARD.HEIGHT}
                  post={item}/>:
                <div
                  style={{
                  width: CARD.WIDTH,
                  height: `${this.state.columnCount ? 360 : CARD.HEIGHT}px`,
                  textAlign: "center",
                  backgroundColor: "#ccc"
                }}
        >
          ...loading
        </div>}
        </div>
      </CellMeasurer>
    );
  };

  renderMasonry = (registerChild, onRowsRendered, height, scrollTop) => ({
    width
  }) => {
    this.initCellPositioner(width);
    const { posts } = this.props;

    return (
      <Masonry
         {...posts?.[0]?.id} //this field is for avoid not rendering on shallow comparisons
        cellCount={posts.length}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this.cellRenderer}
        autoHeight
        height={height}
        scrollTop={scrollTop}
        overscanByPixels={CARD.HEIGHT}
        ref={ref => (this._masonry = ref)}
        onCellsRendered={onRowsRendered}
        width={width}
      />
    );
  };

  renderAutoSizer = () => ({ registerChild, onRowsRendered }) => {
    return (
      <WindowScroller overscanByPixels={CARD.HEIGHT}>
        {({ height, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={this.onResize}
            height={height}
            scrollTop={scrollTop}
          >
            {this.renderMasonry(
              registerChild,
              onRowsRendered,
              height,
              scrollTop
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    );
  };

  renderInfiniteLoader = () => {
    const { posts } = this.props;
    return (
      <InfiniteLoader
        minimumBatchSize={60}
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={posts.length}
      >
        {this.renderAutoSizer()}
      </InfiniteLoader>
    );
  };

  renderImageGallery = () => {
    return (
      <div className="gallery__container">
            {this.renderInfiniteLoader()}
        </div>
    )
  }

  handlelCloseModal = {

  }

  render() {
    const { posts } = this.props;
    if (!posts) return null;

    return (
      <div>
        <Header isHome={true}/>
        <HomeHeader />
        <PostNav />
        {this.renderImageGallery()}
        <ScrollUpBtn />
        {this.props.loading &&
        <Spinner />}
        <ErrorModal />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
    return {
      posts: state.posts,
      page: state.page,
      section_view: state.section_view, 
      sort: state.sort,
      window: state.window,
      show_viral: state.show_viral,
      album_previews: state.album_previews,
      show_mature: state.show_mature,
      loading: state.loading,
      requestCache: state.requestCache
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getPosts: (url, page) =>dispatch(getPosts(url, page)),
      handlePageNumber: (page) => dispatch(handlePageNumber(page)),
      isLoading: (bool) => dispatch(isLoading(bool))
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(MasonryGallery)